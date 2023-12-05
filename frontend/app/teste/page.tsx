import BlogSection from "../../components/blog-section";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

export default function TestePage(){
    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <BlogSection
                    title={"Este é o título"}
                    body={'Aqui ficará o texto em forma de parágrafo que será formulado.'}
                />
            </div>
        </>
    )
}