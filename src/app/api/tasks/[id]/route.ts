import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
    params: { id: string }
}

// Obtener la tarea especifica
export async function GET(request: Request, { params }: Params) {

    const tasks = await prisma.task.findFirst({
        where: {
            id: Number(params.id)
        }
    })

    return NextResponse.json(tasks)
}


// Actualizar la tarea especifica
export async function PUT(request: Request, { params }: Params) {
    const data = await request.json()
    await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data
    })



    return NextResponse.json(data)
}


// Eliminar la tarea especifica
export async function DELETE(request: Request, { params }: Params) {




    const tasks = await prisma.task.delete({
        where: {
            id: Number(params.id)
        }
    })

    return NextResponse.json(tasks)
}