import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

export default function TestePage(){
    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
            </div>
        </>
    )
}