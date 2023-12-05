'use client';

import { useEffect, useState } from "react";

export default function Sidebar(){
    var articlesList = [
        "1. Introdução",
        "2. Desenvolvimento",
        "3. Conclusão"
    ];

    const state = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('sidebarState')
        }
    }

    const [sidebarState, setSidebarState] = useState(state);

    useEffect(() => {
        const checkLocalStorage = () => {
            if (typeof window !== 'undefined') {
                const storedSidebarState = localStorage.getItem('sidebarState');
                if (storedSidebarState !== sidebarState) {
                    setSidebarState(storedSidebarState);
                }
            }
        };

        const interval = setInterval(checkLocalStorage, 1000); // Verifica a cada segundo

        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, [sidebarState]);



    return (
        <div className={"sticky "+sidebarState+" w-3/4 md:w-1/4 pl-9 pt-6 h-screen bg-gray-100 border-r-2 border-gray-200 dark:bg-gray-700 dark:text-white dark:border-b dark:border-gray-600"}>
            <div>
                {articlesList?.map((title, index) => {
                    return (
                        <div key={index} className="py-2 cursor-pointer transform-gpu hover:text-blue-600 dark:hover:text-sky-400 hover:translate-x-1">
                            <h2>{title}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}