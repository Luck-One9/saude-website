"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";
import BlogSection from "@/components/blog-section";

export default function Page(){
     const articles = useQuery(api.articles.get, {
          id: 'introduction'
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