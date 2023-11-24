import Link from "next/link";
export default function Navbar({children}:{children: React.ReactNode}) {
    return (
        <>
            <nav className='flex flex-row w-full py-4 bg-gray-200'>
                <div className=" max-w-md h-full px-36">
                    <Link className="p-1 hover:shadow" href='/'>JOTAKI JÄRKEVÄÄ</Link>
                </div>
                <div className="px-2 items-center h-full">
                    {children}
                </div>
            </nav>
        </>
    )
}