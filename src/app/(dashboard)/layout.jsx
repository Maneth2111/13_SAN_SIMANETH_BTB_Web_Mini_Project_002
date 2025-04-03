import Logo from "@/components/logo";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sideBar/sideBar";

export default function layout({children}) {
  return (
    <>
    <div className="grid grid-cols-12 gap-x-10">
      <div className="col-span-3 bg-gray-200 mt-10">
        <Logo/>
        <Sidebar/>
      </div>
    <div className="flex flex-col h-screen bg-gray-200 col-span-9">
      <Navbar/>
        {children}
    </div>
    </div>

    </>
  )
}
