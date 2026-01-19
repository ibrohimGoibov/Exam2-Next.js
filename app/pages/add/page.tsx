'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import img from '../../../public/image copy 3.png'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useAddTodoMutation } from '@/app/services/pokemon'
import { useRouter } from 'next/navigation'

const Page = () => {
  const { register, handleSubmit } = useForm()
  const [addTodo] = useAddTodoMutation()
  const router = useRouter()
  const [preview, setPreview] = useState<string>('')

  const handleFile = (file: File) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const onSubmit = async (data: any) => {
    await addTodo({
      name: data.name,
      about: data.about,
      status: data.status === 'true',
      avatar: preview,
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
          className="lg:w-[600px] w-[400px] border h-[56px] rounded-[20px] pl-[20px]"
          placeholder="Название"
        />

        <input
          {...register('about')}
          className="lg:w-[600px] w-[400px] border h-[104px] rounded-[20px] pl-[20px]"
          placeholder="Краткое описание"
        />

        <div className="flex items-center justify-between lg:w-[600px] w-[90%] m-auto">
          <h1 className="text-[20px]">Статус</h1>
          <div className="flex items-center gap-[20px]">
            <label className="border border-[#FFA900] rounded-[20px] px-[20px] py-[10px]">
              <input {...register('status')} type="radio" value="true" />
              Показать
            </label>
            <label className="border border-[#FFA900] rounded-[20px] px-[20px] py-[10px]">
              <input {...register('status')} type="radio" value="false" />
              Скрыть
            </label>
          </div>
        </div>
      </div>

      <label className="flex flex-col items-center justify-center w-full lg:max-w-[600px] max-w-[600px] h-64 bg-[#F4F4F5] dark:bg-black rounded-3xl cursor-pointer text-center m-auto mt-[20px] gap-2">
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={e => e.target.files && handleFile(e.target.files[0])}
        />

        {preview ? (
          <img src={preview} className="h-full object-cover rounded-3xl" />
        ) : (
          <Image src={img} alt="" />
        )}

        <p className="text-lg font-semibold text-gray-900 dark:text-white">Загрузить фото</p>
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
