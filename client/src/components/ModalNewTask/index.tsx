import { Priority, Status, useCreateTaskMutation } from '@/state/api';
import React, { useState } from 'react'
import Modal from '@/components/Modal';
import { formatISO } from "date-fns"

type Props = {
    isOpen: boolean;
    onClose: () => void;
    id: string;
}

const ModalNewTask = ({
    isOpen,
    onClose,
    id
}: Props) => {

    const [createTask, {isLoading}] = useCreateTaskMutation(); 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<Status>(Status.ToDo);
    const [priority, setPriority] = useState<Priority>(Priority.Backlog);
    const [tags, setTags] = useState("");
    const [startDate, setStartDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [authorUserId, setAuthorUserId] = useState("");
    const [assignedUserId, setAssignedUserId] = useState("");

    const handleSubmit = async () => {
        if (!title || !authorUserId) return;

        const formattedStartDate = formatISO(new Date(startDate), { representation: 'complete' })
        const formattedDueDate = formatISO(new Date(dueDate), { representation: 'complete' })

        await createTask({
            title,
            description,
            status,
            priority,
            tags,
            startDate: formattedStartDate,
            dueDate: formattedDueDate,
            authorUserId: parseInt(authorUserId),
            assignedUserId: parseInt(assignedUserId),
            projectId: Number(id),
        })
    }

    const isFormValid = () => {
        return title && authorUserId;
    };

    const selectStyles =
        "mb-4 block w-full rounded border border-gray-300 px-3 py-2 dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none"

    const inputStyles = "w-full rounded border border-gray-300 p-2 shadow-sm dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none"

  return (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        name="Criar Nova Task" 
    >
        <form
            className='mt-4 space-y-6'
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <input 
                type="text"
                className={inputStyles}
                placeholder='Titulo'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea 
                className={inputStyles}
                placeholder='Descrição'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
             <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2'>
                <select
                    className={selectStyles}
                    value={status}
                    onChange={(e) => setStatus(Status[e.target.value as keyof typeof Status])}
                >
                    <option
                        value=""
                    >
                        Status
                    </option>

                    <option value={Status.ToDo}>To Do</option>
                    <option value={Status.WorkInProgress}>Em Progresso</option>
                    <option value={Status.UnderReview}>Para Revisão</option>
                    <option value={Status.Completed}>Finalizada</option>
                </select>

                <select
                    className={selectStyles}
                    value={priority}
                    onChange={(e) => setPriority(Priority[e.target.value as keyof typeof Priority])}
                >
                    <option
                        value=""
                    >
                        Priority
                    </option>

                    <option value={Priority.Urgent}>Urgente</option>
                    <option value={Priority.High}>Alta</option>
                    <option value={Priority.Medium}>Média</option>
                    <option value={Priority.Low}>Baixa</option>
                    <option value={Priority.Backlog}>Pendente</option>
                </select>
            </div>
            <input 
                type="text"
                className={inputStyles}
                placeholder='Tags'
                value={tags}
                onChange={(e) => setTags(e.target.value)}
            />

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2'>
                <input 
                    type="date"
                    className={inputStyles}
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                 <input 
                    type="date"
                    className={inputStyles}
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </div>
            <input 
                type="text"
                className={inputStyles}
                placeholder='Autor'
                value={authorUserId}
                onChange={(e) => setAuthorUserId(e.target.value)}
            />

            <input 
                type="text"
                className={inputStyles}
                placeholder='Admin'
                value={assignedUserId}
                onChange={(e) => setAssignedUserId(e.target.value)}
            />

           <button
                type="submit"
                className={`mt-4 flex w-full justify-center rounded-md border border-transparent bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:offset-2 ${
                    !isFormValid() || isLoading ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={!isFormValid() || isLoading}
           >
                {isLoading ? "Criando..." : "Criar Task"}
           </button>
        </form>
    </Modal>
  )
}

export default ModalNewTask