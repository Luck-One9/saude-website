"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import BlogSection from "@/components/blog-section";
import { useEffect } from "react";

export default function TestePage({ params }: { params: { id: string } }){
    const articles = useQuery(api.articles.get, {
        id: params.id
    });

    useEffect(() => {
        if (articles && articles.length > 0) {
          // Alterar o título da página para o título do primeiro artigo
          document.title = articles[0].title + " | TechLife";
        }
    }, [articles]);
    
    return (
        <>
            {articles?.map((article:any) => (
                    <BlogSection 
                        key={article._id}
                        article={article}
                    />
            ))}

        </>
    )
}