import { Task } from '@/state/api'
import {format} from 'date-fns';
import Image from 'next/image';
import React from 'react'

type Props = {
    task: Task
}

function TaskCard({task}: Props) {
  return (
    <div className='mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white'>
        {task.attachments && task.attachments.length > 0 && (
            <div className=''>
                <strong>Attachments:</strong>
                <div className='flex flex-wrap'>
                    {task.attachments && task.attachments.length > 0 && (
                        <Image
                            src={`/${task.attachments[0].fileURL}`}
                            alt={task.attachments[0].fileName}
                            width={400}
                            height={200}
                            className='rounded-md'
                        />
                    )}
                </div>
            </div>
        )}
        <p>
            <strong>ID:</strong> {task.id}
        </p>
        <p>
            <strong>Titulo:</strong> {task.title}
        </p>
        <p>
            <strong>Descrição:</strong> {" "} {task.description || "Sem descrição.."}
        </p>
        <p>
            <strong>Status:</strong> {task.status}
        </p>
        <p>
            <strong>Prioridade:</strong> {task.priority}
        </p>
        <p>
            <strong>Tags:</strong> {task.tags || "Sem tags."}
        </p>
        <p>
            <strong>Data de Inicio:</strong> {" "}
            {task.startDate ? format(new Date(task.startDate), "P") : "Sem data"}
        </p>
        <p>
            <strong>Vencimento:</strong> {" "}
            {task.dueDate ? format(new Date(task.dueDate), "P") : "Sem data"}
        </p>
        <p>
            <strong>Autor:</strong> {task.author ? task.author.username : "Unknown"}
        </p>
        <p>
            <strong>Administrador:</strong> {task.assignee ? task.assignee.username : "Sem admin"}
        </p>
    </div>
  )
}

export default TaskCard