
export default function Navbar({children}:{children: React.ReactNode}) {
    return (
        <>
        <nav className='flex flex-row w-full p-5 border-solid border-2 border-gray'>
            {children}
        </nav>
        </>
    )
}