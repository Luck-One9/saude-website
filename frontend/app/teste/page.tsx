"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import BlogSection from "@/components/blog-section";

export default function TestePage(){
    const articles = useQuery(api.articles.get, {id: 'introduction'});
    console.log(JSON.stringify(articles));
    return (
        <>
                {articles?.map(({
                    title,
                    description,
                    body
                }: {
                    title:string,
                    description:string,
                    body:string
                }) => (
                    <BlogSection 
                        title={title}
                        desc={description}
                        body={body}
                    />
                ))}
                {/* <BlogSection 
                    title={articles?.title}
                    desc={articles?.description}
                    body={articles?.body}
                /> */}
        </>
    )
}