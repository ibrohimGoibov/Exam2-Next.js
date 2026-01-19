'use client'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import img from '../../../public/image.png'
import img1 from '../../../public/image copy.png'
import { Modal } from 'antd'
import { useRouter } from 'next/dist/client/components/navigation'

const Page = () => {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      setEmail(JSON.parse(user).email)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (!email) return null
  return (
    <div>
      <div className="flex items-center gap-[10px] justify-between w-[90%] m-auto lg:p-[20px]">
        <Image src={img} alt="" />

        <div className="hidden lg:flex items-center gap-[20px] p-[15px] ml-[-50px] text-[18px]">
          <Link href="/pages/home"><p>Новости</p></Link>
          <Link href="/pages/vakansii"><p>Вакансии</p></Link>
          <Link href="/pages/zayavki"><p>Заявки</p></Link>
        </div>

        <div className="flex items-center gap-[20px]">
          <AnimatedThemeToggler />
          <Link href={'/'}>
          <div className="flex items-center gap-4">
      <span className="font-medium">{email}</span>
      <button
        onClick={logout}
        className="text-red-500 border px-3 py-1 rounded"
        >
        Logout
      </button>
    </div>
        </Link>

          <div className="lg:hidden">
            <button
              className="text-[30px] ml-[10px]"
              onClick={() => setOpen(true)}
            >
              ≡
            </button>

            <Modal
              open={open}
              footer={null}
              onCancel={() => setOpen(false)}
              width="40%"
              className="p-0"
            >
              <div className="flex flex-col gap-4 mt-6 p-[20px]">
                <Link href="/pages/home" onClick={() => setOpen(false)}>
                  <p>Новости</p>
                </Link>
                <Link href="/pages/vakansii" onClick={() => setOpen(false)}>
                  <p>Вакансии</p>
                </Link>
                <Link href="/pages/zayavki" onClick={() => setOpen(false)}>
                  <p>Заявки</p>
                </Link>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
