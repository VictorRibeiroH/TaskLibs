import { useAppSelector } from '@/app/redux';
import Header from '@/components/Header';
import { dataGridClassNames, dataGridSxStlyes } from '@/lib/utils';
import { useGetTasksQuery } from '@/state/api';
import {DataGrid, GridColDef} from "@mui/x-data-grid"
import React from 'react'

type Props = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
}

const columns: GridColDef[] = [
    {
        field: "title",
        headerName: "Titulo",
        width: 100
    },
    {
        field: "description",
        headerName: "Descrição",
        width: 200
    },
    {
        field: "status",
        headerName: "Status",
        width: 130,
        renderCell: (params) => (
            <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                {params.value}
            </span>
        )
    },
    {
        field: "priority",
        headerName: "Prioridade",
        width: 75,
    },
    {
        field: "tags",
        headerName: "Tags",
        width: 130,
    },
    {
        field: "startDate",
        headerName: "Data de Inicio",
        width: 130,
    },
    {
        field: "dueDate",
        headerName: "Vencimento",
        width: 130,
    },
    {
        field: "author",
        headerName: "Autor",
        width: 150,
        renderCell: (params) => params.value.username || "Unknown"
    },
    {
        field: "assignee",
        headerName: "Adminstrador",
        width: 150,
        renderCell: (params) => params.value.username || "Sem Admin"
    },
]

const TableView = ({ id, setIsModalNewTaskOpen}: Props) => {
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
    const {
        data: tasks,
        error,
        isLoading,
    } = useGetTasksQuery({ projectId: Number(id)});

    if(isLoading) return <div>Carregando...</div>
    if(error) return <div>Algum erro aconteceu :/</div>

    return (
        <div className='h-[540px] w-full px-4 pb-8 xl:px-6'>
            <div className='pt-5'>
                <Header name="Tabela" isSmallText/>
            </div>
            <DataGrid 
                rows={tasks || []}
                columns={columns}
                className={dataGridClassNames}
                sx={dataGridSxStlyes(isDarkMode)}
            />
        </div>
    )
}

export default TableView;