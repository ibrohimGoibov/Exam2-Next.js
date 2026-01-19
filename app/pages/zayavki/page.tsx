"use client"

import { useState } from "react"
import Image from "next/image"
import img from "../../../public/image copy 4.png"

const data = Array.from({ length: 25 }).map(() => ({
  name: "Аличон Забири",
  phone: "88888 0101",
  email: "example@gmail.com",
  company: "Капитал-Т",
  date: "01.12.2024",
}))

const PAGE_SIZE = 5

export default function Page() {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(data.length / PAGE_SIZE)
  const start = (page - 1) * PAGE_SIZE
  const current = data.slice(start, start + PAGE_SIZE)

  return (
    <div className="w-full">
      <table className="w-[90%] m-auto border-separate border-spacing-y-4">
        <thead>
          <tr className="shadow rounded-full">
            <th className="py-4 text-left px-6">ФИО</th>
            <th className="text-left">Телефон</th>
            <th className="text-left">Email</th>
            <th className="text-left">Название компании</th>
            <th className="text-left">Дата</th>
            <th className="text-center">Предложение</th>
          </tr>
        </thead>

        <tbody>
          {current.map((item, i) => (
            <tr key={i} className="shadow rounded-full">
              <td className="py-4 px-6 font-medium">{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.company}</td>
              <td>{item.date}</td>
              <td className="text-center">
                <Image src={img} alt="" className="w-7 h-7 mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-center gap-3 mt-10">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          className="w-10 h-10 rounded-full border text-orange-500"
        >
          ‹
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-10 h-10 rounded-full ${
              page == i + 1
                ? "bg-orange-400 text-white"
                : "border text-gray-500"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          className="w-10 h-10 rounded-full border text-orange-500"
        >
          ›
        </button>
      </div>
    </div>
  )
}
