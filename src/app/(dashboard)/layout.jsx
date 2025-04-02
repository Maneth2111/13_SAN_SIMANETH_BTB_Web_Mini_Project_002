import Logo from "@/components/logo";

export default function layout({children}) {
  return (
    <>
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <Logo/>
      </div>
    <div className="flex flex-col h-screen bg-red-300 col-span-9">
        {children}
    </div>
    </div>

    </>
  )
}
