'use client'
import { Task } from "@prisma/client"
import { useRouter } from "next/navigation"


interface Props {
    task: Task
}

export default function TaskCard({ task }: Props) {

    const router = useRouter()


    return (

        <div className="bg-gray-900 p-3 hover:bg-gray-800 cursor-pointer"
            onClick={() => { router.push(`/task/edit/${task.id}`) }}
        >
            <h3 className="font-bold text-2xl">{task.title}</h3>
            <p className="text-slate-300">{task.description}</p>
        </div>
    )
}
