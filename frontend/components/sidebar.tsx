'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar(){
    var articlesList = [
        {text:"1. Introdução", link:'introduction'},
        {text:"2. Saúde Digital", link:'digital-health'},
        {text:"3. Exercícios e bem-estar", link:'exercises'},
        {text:"4. O sono e a Tecnologia", link:'sleep-and-technology'},
        {text:"5. Saúde Mental", link:'mental-health'},
        {text:"6. Conectividade Social", link:'social-connectivity'},
        {text:"7. Vício em tecnologia", link:'technology-addiction'},
        {text:"8. Uso Consciente", link:'conscious-use'},
        {text:"9. Conclusão", link:'conclusion'}
    ];

    const state = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('sidebarState')
        }
    };

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
                {articlesList?.map((item, index) => {
                    return (
                        <div key={index} className="py-3 cursor-pointer transform-gpu hover:text-blue-600 dark:hover:text-sky-400 hover:translate-x-1">
                            <Link href={"/"+item.link}>{item.text}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}