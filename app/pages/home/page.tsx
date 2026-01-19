'use client'
import Image from 'next/image'
import img from '../../../public/image copy 2.png'
import Link from 'next/link'
import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useEditTodoMutation,
  useCheckboxTodoMutation
} from '@/app/services/pokemon'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'

const Page = () => {
  const { data } = useGetTodosQuery()
  const [deleteTodo] = useDeleteTodoMutation()
  const [editTodo] = useEditTodoMutation()
  const [checkboxTodo] = useCheckboxTodoMutation()
  const { register, handleSubmit, reset } = useForm()

  const onEdit = async (formData: any, id: number) => {
    await editTodo({
      id,
      name: formData.name,
      about: formData.about,
      avatar: formData.avatar
    })
    reset()
  }

  return (
    <div>
      <div className="p-[30px]">
        <div className="flex items-center justify-between w-[89%] m-auto">
          <div className="num1">
            <h1 className="text-[36px] font-[700]">Новости</h1>
            <div className="w-[100px] h-[4px] bg-[#FFA900] mt-[10px]"></div>
          </div>
          <Link href={'/pages/add'}>
            <button className="flex items-center gap-[10px] w-[138px] h-[52px] text-white bg-[#FFA900] justify-center rounded-[50px]">
              Добавить
            </button>
          </Link>
        </div>

        <div className="lg:flex lg:flex-row flex-col items-center justify-center gap-[30px] mt-[40px] flex-wrap">
          {data?.map(e => (
            <div key={e.id} className="num1 border rounded-[20px] p-[10px] mt-[20px] w-[400px]">
              <Image src={e.avatar || img} alt="" width={300} height={200} />
              <div className="txt p-[20px]">
                <h2 className="text-[20px] font-[700]">{e.name}</h2>
                <p className="text-[grey] text-[14px]">{e.about}</p>

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
                            about: e.about,
                            avatar: e.avatar,
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
                              <Input {...register('about')} placeholder="Edit about" />
                              <Input {...register('avatar')} placeholder="Edit img" />

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
      status: !e.status
    })
  }
>
  {e.status ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/>
      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/>
      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/>
      <path d="m2 2 20 20"/>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
      <circle cx="12" cy="12" r="3"/>
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
