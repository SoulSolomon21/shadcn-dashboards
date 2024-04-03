import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

function Product() {

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Sidebar/>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Header/>
            </div>
        </div>
    )
}

export default Product