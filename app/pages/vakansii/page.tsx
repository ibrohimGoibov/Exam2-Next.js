'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');
import {
  useCheckboxTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodoQuery,
} from '@/app/services/pokemon1'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'

const Page = () => {
  const { data } = useGetTodoQuery()
  const [checkboxTodo] = useCheckboxTodoMutation()
  const [editTodo] = useEditTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()
  const { register, handleSubmit, reset } = useForm()

  const onEdit = async (formData: any, id: number) => {
    await editTodo({
      id,
      name: formData.name,
      info: formData.info,
    })
    reset()
  }

  return (
    <div>
      <Toaster position="top-right" />
      <div className="p-[30px]">
        <div className="flex items-center justify-between w-[89%] m-auto">
          <div className="num1">
            <h1 className="text-[36px] font-[700]">Новости</h1>
            <div className="w-[100px] h-[4px] bg-[#FFA900] mt-[10px]"></div>
          </div>
          <Link href={'/pages/add1'}>
            <button className="flex items-center gap-[10px] w-[138px] h-[52px] text-white bg-[#FFA900] justify-center rounded-[50px]">
              Добавить
            </button>
            <Toaster />
          </Link>
        </div>

        <div className="lg:flex lg:flex-row flex-col items-center justify-start lg:ml-[65px] gap-[30px] mt-[40px] flex-wrap">
          {data?.map(e => (
            <div key={e.id} className="num1 border rounded-[20px] mt-[20px] p-[10px]">
              <div className="flex items-center justify-between w-[90%] ml-[5px]">
                <button className="px-[10px] py-[5px] bg-black text-white rounded-[5px]">
                  Опыт от 1 года
                </button>
                Бохтар
              </div>

              <div className="txt p-[20px]">
                <h2 className="text-[20px] font-[700]">{e.name}</h2>
                <p className="text-[grey] text-[14px]">
                  {e.info}
                </p>

                <div className="flex items-center mt-[20px] justify-between">
                  <p className="text-[17px] text-[#FFA900]">Подробнее</p>
                  <div className="flex items-center gap-[10px]">
                    <button onClick={() => deleteTodo(e.id)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        <path d="M3 6h18" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>

                    <Dialog>
                      <DialogTrigger
                        onClick={() =>
                          reset({
                            name: e.name,
                            info: e.info,
                          })
                        }
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                          <path d="m15 5 4 4" />
                        </svg>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit news</DialogTitle>
                          <DialogDescription>
                            <form
                              className="flex flex-col gap-[10px]"
                              onSubmit={handleSubmit(data => onEdit(data, e.id))}
                            >
                              <Input {...register('name')} placeholder="Edit name" />
                              <Input {...register('info')} placeholder="Edit info" />
                              <button type="submit">Edit</button>
                            </form>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    

                    <button
                      onClick={() =>
                        checkboxTodo({
                          id: e.id,
                          status: !e.status,
                        })
                      }
                    >
                      {e.status ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m2 2 20 20" />
                          <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
