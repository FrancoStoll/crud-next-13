// import axios from "axios";

import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  // https
  // query database

  // With axios
  // const res = await axios.get('http://localhost:3000/api/tasks')

  // return res.data

  // With Prisma

  return await prisma.task.findMany()


}

export default async function Home() {
  const tasks = await loadTasks()


  return (


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>

  );
}
