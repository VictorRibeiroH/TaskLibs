"use client";

import React, { useState } from 'react'

import ProjectHeader from '@/app/projects/ProjectHeader';
import ModalNewTask from '@/components/ModalNewTask';

import Board from '../BoardView';
import List from '../ListView'
import TimelineView from '../TimelineView';
import Table from '../TableView'



type Props = {
    params: {id: string}
}

const Project = ({params}: Props) => {

    const { id } = params;
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
        <ModalNewTask
            isOpen={isModalNewTaskOpen}
            onClose={() => setIsModalNewTaskOpen(false)}
            id={id}
        />
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        { activeTab === "Board" && (
            <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
        ) }

        { activeTab === "Lista" && (
            <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
        ) }

        { activeTab === "TimeLine" && (
            <TimelineView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
        ) }

        { activeTab === "Tabela" && (
            <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
        ) }
    </div>
  )
}

export default Project