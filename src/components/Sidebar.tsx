import { Home, Library, Search } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <nav className='space-y-5'>
                <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
                    <Home />
                    Home
                </a>
                <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
                    <Search />
                    Search
                </a>
                <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
                    <Library />
                    Your Libary
                </a>
            </nav>

            <nav className='mt-10 mb-10 border-t border-zinc-800 flex flex-col gap-3'>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Trap 2023 Atualizada</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Tops Brasil</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Hots Hits Brasil</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Liked Songs</a>
            </nav>

        </aside>
    )
}