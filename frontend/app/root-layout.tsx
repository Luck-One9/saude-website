'use client';
import { useState } from "react";

export default function RootHTML({
    children,
  }: {
    children: React.ReactNode
  }){
    var themeStored = () => {
        if (typeof window !== 'undefined') {
            let theme = localStorage.getItem('theme');
            if(theme){
                return theme;
            }else{
                localStorage.setItem('theme', 'light');
                return 'light';
            }
        }
    };
    const [ theme, setTheme ] = useState(themeStored);
    return (
        <html lang="pt-BR" className={theme}>
            {children}
        </html>
    )
}