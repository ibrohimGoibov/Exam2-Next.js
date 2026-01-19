import Image from 'next/image'
import React from 'react'
import img from '../../../public/image copy 3.png'
import Link from 'next/link'
const page = () => {
  return (
    <div>
        <Link href={'/pages/addVakansii'}>
      <div className="flex items-center gap-[10px] lg:p-[40px] lg:ml-[40px] p-[20px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left"><circle cx="12" cy="12" r="10"/><path d="m12 8-4 4 4 4"/><path d="M16 12H8"/></svg>
        <h1 className='lg:text-[36px] text-[20px] font-[700]'>Добавить новость</h1>
      </div>
        </Link>
      <div className="flex items-center flex-col gap-[20px]">
        <input type="text" className='lg:w-[600px] w-[400px]  border h-[56px] rounded-[20px] pl-[20px]' placeholder='Название' />
        <input type="text" className='lg:w-[600px] w-[400px]  border h-[104px] rounded-[20px] pl-[20px]' placeholder='Краткое описание' />
        <input type="date" className='lg:w-[600px] w-[400px]  border h-[56px] rounded-[20px] pl-[20px] px-[20px]' placeholder='Дата публикации' />
        <div className="flex items-center justify-between lg:w-[600px] w-[90%] m-auto">
            <h1 className='text-[20px] '>Статус</h1>
            <div className="flex items-center gap-[20px]">
                <button className='lg:px-[20px] lg:py-[10px] px-[10px] py-[5px] rounded-[20px] border border-[#FFA900]'><input type="radio" name="" id="" /> Показать</button>
                <button className='lg:px-[20px] lg:py-[10px] px-[10px] py-[5px] rounded-[20px] border border-[#FFA900]'><input type="radio" name="" id="" /> Скрыть</button>
            </div>
        </div>
    </div>
    <div className="w-full lg:max-w-[600px] max-w-[90%] mt-[30px] border border-neutral-700 rounded-xl overflow-hidden m-auto text-white">
      <div className="flex items-center gap-4 px-4 py-3 border-b border-neutral-700 text-neutral-400">
        <span className="text-sm">Normal</span>

        <div className="flex items-center gap-3 ml-4">
          <svg className="w-4 h-4 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 4h8a4 4 0 010 8H6z" />
            <path d="M6 12h9a4 4 0 010 8H6z" />
          </svg>

          <svg className="w-4 h-4 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="4" x2="10" y2="4" />
            <line x1="14" y1="20" x2="5" y2="20" />
            <line x1="15" y1="4" x2="9" y2="20" />
          </svg>

          <svg className="w-4 h-4 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 4v10a6 6 0 0012 0V4" />
            <line x1="4" y1="20" x2="20" y2="20" />
          </svg>

          <svg className="w-4 h-4 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 00-7.07-7.07L9 6" />
            <path d="M14 11a5 5 0 00-7.07 0L5.5 12.5a5 5 0 007.07 7.07L15 18" />
          </svg>

          <svg className="w-4 h-4 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <circle cx="4" cy="6" r="1" />
            <circle cx="4" cy="12" r="1" />
            <circle cx="4" cy="18" r="1" />
          </svg>

          <svg className="w-4 h-4 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="10" y1="6" x2="21" y2="6" />
            <line x1="10" y1="12" x2="21" y2="12" />
            <line x1="10" y1="18" x2="21" y2="18" />
            <path d="M4 6h1v4" />
            <path d="M4 14h2v4" />
          </svg>

          <svg className="w-4 h-4 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 4h12" />
            <path d="M6 12h12" />
            <path d="M10 4v16" />
            <path d="M14 4v16" />
          </svg>
        </div>
      </div>

      <div className="min-h-[200px] px-4 py-4 text-neutral-400">
        Описание
      </div>
    </div>
    <label className="flex flex-col items-center justify-center w-full lg:max-w-[600px] max-w-[600px] h-64 bg-[#F4F4F5] rounded-3xl cursor-pointer text-center m-auto mt-[20px] gap-2">
      <input type="file" className="hidden" />
      <Image src={img} alt='' />

      <p className="text-lg font-semibold text-gray-900">
        Загрузить фото
      </p>

      <p className="text-sm text-gray-400">
        Размер файла не более 5 MB
      </p>
    </label>
    <div className="flex items-center justify-center gap-[10px]">
    <button className="bg-[#FFA900] text-[white] lg:w-[292px] w-[260px] h-[52px] rounded-[50px] mt-[20px]">Сохранить</button>
    <button className="border border-[#FFA900] text-[#FFA900] lg:w-[292px] w-[260px] h-[52px] rounded-[50px] mt-[20px]">Отмена</button>
    </div>
</div>
  )
}

export default page
