import { promises as fs } from 'fs';

import BlogSection from "@/components/blog-section";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default async function TestePage({ params }: { params: { id: number } }){
    const file = await fs.readFile(process.cwd() + `/articles/${params.id}.json`, 'utf8');
    const data = JSON.parse(file);

    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <BlogSection 
                    title={data.title}
                    desc={data.description}
                    body={data.body}
                />
            </div>
        </>
    )
}