'use client';
import { useEffect, useState } from "react";
import Typist from 'react-typist';

export default function Navbar(){
    const [ theme, setTheme ] = useState('light');
    const [ title, setTitle ] = useState('TechLife');

    useEffect(() => {
        let ls = localStorage.getItem('theme');
        if(ls){
            setTheme(ls);
            let html = document.getElementsByTagName('html').item(0)?.classList;
            if(!(html?.contains('dark')) && theme == "dark"){
                html?.add('dark')
            }
        }
    });

    const changeTheme = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', (theme == 'dark' ? 'light': 'dark'));
            setTheme(theme == 'dark' ? 'light': 'dark');
            let html = document.getElementsByTagName('html');
            html.item(0)?.classList.toggle('dark');
        }
    };


    const toggleSidebar = () => {
        if (typeof window !== 'undefined') {
            let sidebarState = localStorage.getItem('sidebarState');
            localStorage.setItem('sidebarState', (!sidebarState || sidebarState == 'show' ? 'hidden' : 'show'));
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            var titulo = () => {
                if(document.title.length >= 11){
                    return document.title.substring(0, document.title.length - 11);
                }
                return document.title
            }
            setTitle(titulo);
        }, 2000);
      
        return () => {
            clearTimeout(timer); // Limpa o setTimeout quando o componente é desmontado
        };
    }, []);

    return (
        <div className="relative">
            <header className="sticky top-0 left-0 w-full antialiased">
                <nav className="bg-gray-200 border-b border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900 dark:border-b dark:border-gray-600">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex justify-start items-center">
                            <button id="toggleSidebar" onClick={toggleSidebar} aria-expanded="true" aria-controls="sidebar" className="p-2 mr-3 text-gray-600 rounded cursor-pointer hidden md:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h14M1 6h14M1 11h7"/> </svg>
                            </button>
                            <button aria-expanded="true" onClick={toggleSidebar} aria-controls="sidebar" className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <svg className="w-[18px] h-[18px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/></svg>
                                <span className="sr-only">Toggle sidebar</span>
                            </button>
                        </div>
                        <div className="ml-10">
                            <span className="text-center dark:text-white">{title}</span>
                        </div>
                        <div className="flex items-center lg:order-2">
                            {/* <!-- Theme Switch --> */}
                            <button id="theme-toggle" type="button" onClick={changeTheme} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-2">
                                <svg id="theme-toggle-dark-icon" className={`${theme == 'dark' ? "hidden": ""} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                                <svg id="theme-toggle-light-icon" className={`${theme == 'light' ?  "hidden" : ""} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                            </button>
                            {/* <!-- Choice a language --> */}
                            <form className="max-w-sm mx-auto">
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Português</option>
                                <option>Inglês</option>
                                <option>Espanhol</option>
                                <option>Francês</option>
                                <option>Japonês</option>
                            </select>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}