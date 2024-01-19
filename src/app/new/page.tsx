'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"


export default function Home({ params }: { params: { id: string } }) {


    const { handleSubmit, register, setValue } = useForm()
    const router = useRouter()


    useEffect(() => {
        if (params.id) {
            axios.get(`/api/tasks/${params.id}`)
                .then(res => {
                    setValue('title', res.data.title)
                    setValue('description', res.data.description)
                })
        }
    }, [])


    const onSubmit = handleSubmit(async data => {
        if (!params.id) {
            await axios.post('/api/tasks', data)

        } else {
            await axios.put(`/api/tasks/${params.id}`, data)
        }

        router.push('/')
        router.refresh()

    })

    return (

        <section className="h-[calc(100vh-7rem)] flex items-center justify-center">
            <form onSubmit={onSubmit} className="w-1/4">
                <h1 className="text-2xl font-bold">
                    {params.id ? 'Update Task' : 'Create Task'}
                </h1>
                <label htmlFor="title" className="font-bold text-xs">Write your Title:</label>
                <input id="title" type="text" placeholder="Write a title"
                    className="px-3 py-1 border border-gray-300 rounded-md focus:ring-1 focus:ring-sky-300 focus:border-sky-300 shadow-sm focus:outline-none text-black block mb-2 w-full"
                    {...register('title')}
                />
                <label htmlFor="description" className="font-bold text-xs">Write your Descripction:</label>
                <textarea id="description" className="px-3 py-1 border border-gray-300 rounded-md focus:ring-1 focus:ring-sky-300 focus:border-sky-300 shadow-sm focus:outline-none text-black block w-full" placeholder="Write a description"
                    {...register('description')}
                ></textarea>
                <div className="flex justify-between">
                    <button className="bg-sky-500 px-3 py-2 text-white mt-2 rounded-md">
                        {params.id ? 'Update' : 'Create Task'}
                    </button>

                    {params.id && (
                        <button type="button" className="mt-2 bg-red-500 px-3 py-2 text-white  rounded-md"
                            onClick={
                                async () => {
                                    await axios.delete(`/api/tasks/${params.id}`)
                                    router.push('/')
                                    router.refresh()
                                }
                            }
                        >
                            Delete
                        </button>
                    )}

                </div>

            </form>
        </section>

    )
}