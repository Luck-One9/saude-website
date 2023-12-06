"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import BlogSection from "@/components/blog-section";

export default function TestePage({ params }: { params: { id: string } }){
    const articles = useQuery(api.articles.get, {id: params.id});
    return (
        <>
            {articles?.map(({
                    _id,
                    title,
                    description,
                    body
                }: {
                    _id:string
                    title:string,
                    description:string,
                    body:string
                }) => (
                    <BlogSection 
                        key={_id}
                        title={title}
                        desc={description}
                        body={body}
                    />
            ))}

        </>
    )
}