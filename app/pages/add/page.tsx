'use client'
import Image from 'next/image'
import React from 'react'
import img from '../../../public/image copy 3.png'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useAddTodoMutation } from '@/app/services/pokemon'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const Page = () => {
  const { register, handleSubmit, watch } = useForm()
  const [addTodo] = useAddTodoMutation()
  const router = useRouter()

  const onSubmit = async (data: any) => {
    await addTodo({
      name: data.name,
      about: data.about,
      status: data.status === 'true',
      avatar: '',
    })
    router.push('/pages/home')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Link href={'/pages/home'}>
        <div className="flex items-center gap-[10px] lg:p-[40px] lg:ml-[40px] p-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m12 8-4 4 4 4" />
            <path d="M16 12H8" />
          </svg>
          <h1 className="lg:text-[36px] text-[20px] font-[700]">Добавить новость</h1>
        </div>
      </Link>

      <div className="flex items-center flex-col gap-[20px]">
        <input
          {...register('name')}
          type="text"
          className="lg:w-[600px] w-[400px] border h-[56px] rounded-[20px] pl-[20px]"
          placeholder="Название"
        />

        <input
          {...register('about')}
          type="text"
          className="lg:w-[600px] w-[400px] border h-[104px] rounded-[20px] pl-[20px]"
          placeholder="Краткое описание"
        />

        <input
          type="date"
          className="lg:w-[600px] w-[400px] border h-[56px] rounded-[20px] pl-[20px] px-[20px]"
        />

        <div className="flex items-center justify-between lg:w-[600px] w-[90%] m-auto">
          <h1 className="text-[20px]">Статус</h1>
          <div className="flex items-center gap-[20px]">
            <label className="lg:px-[20px] lg:py-[10px] px-[10px] py-[5px] rounded-[20px] border border-[#FFA900]">
              <input {...register('status')} type="radio" value="true" />
              Показать
            </label>
            <label className="lg:px-[20px] lg:py-[10px] px-[10px] py-[5px] rounded-[20px] border border-[#FFA900]">
              <input {...register('status')} type="radio" value="false" />
              Скрыть
            </label>
          </div>
        </div>
      </div>

      <div className="w-full lg:max-w-[600px] max-w-[90%] mt-[30px] border border-neutral-700 rounded-xl overflow-hidden m-auto text-white">
        <div className="min-h-[200px] px-4 py-4 text-neutral-400">
          Описание
        </div>
      </div>

      <label className="flex flex-col items-center justify-center w-full lg:max-w-[600px] max-w-[600px] h-64 bg-[#F4F4F5] rounded-3xl cursor-pointer text-center m-auto mt-[20px] gap-2">
        <input type="file" className="hidden" />
        <Image src={img} alt="" />
        <p className="text-lg font-semibold text-gray-900">Загрузить фото</p>
        <p className="text-sm text-gray-400">Размер файла не более 5 MB</p>
      </label>

      <div className="flex items-center justify-center gap-[10px]">
        <button type="submit" className="bg-[#FFA900] text-white lg:w-[292px] w-[260px] h-[52px] rounded-[50px] mt-[20px]">
          Сохранить
        </button>
        <Link href="/pages/home">
          <button type="button" className="border border-[#FFA900] text-[#FFA900] lg:w-[292px] w-[260px] h-[52px] rounded-[50px] mt-[20px]">
            Отмена
          </button>
        </Link>
      </div>
    </form>
  )
}

export default Page