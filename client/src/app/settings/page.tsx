import Header from '@/components/Header';
import React from 'react'

const Settings = () => {

    const userSettings = {
        username: "johndoe",
        email: "john.doe@example.com",
        teamName: "Development Team",
        roleName: "developer"
    }


    const labelStyles = 
    "block text-sm font-medium dark:text-white";
    const textStyles =
    "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white"


  return (
    <div className='p-8'>
        <Header
            name="Configurações"
        />
        <div className='space-y-4'>
            <div>
                <label className={labelStyles}>
                    Nome de Usuário
                </label>
                <div className={textStyles}>
                    {userSettings.username}
                </div>
            </div>

            <div>
                <label className={labelStyles}>
                    Email
                </label>
                <div className={textStyles}>
                    {userSettings.email}
                </div>
            </div>

            <div>
                <label className={labelStyles}>
                    Time
                </label>
                <div className={textStyles}>
                    {userSettings.teamName}
                </div>
            </div>

            <div>
                <label className={labelStyles}>
                    Cargos
                </label>
                <div className={textStyles}>
                    {userSettings.roleName}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings