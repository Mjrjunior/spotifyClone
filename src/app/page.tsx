import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>

            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>
            Good afternoon
          </h1>

          <div className='grid grid-cols-3 gap-3 mt-4'>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/capadoalbum.jpg" width={104} height={104} alt="Capa do álbum 24K do Bruno Mars" />
              <strong>24K Magic</strong>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/capadoalbum.jpg" width={104} height={104} alt="Capa do álbum 24K do Bruno Mars" />
              <strong>24K Magic</strong>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/capadoalbum.jpg" width={104} height={104} alt="Capa do álbum 24K do Bruno Mars" />
              <strong>24K Magic</strong>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/capadoalbum.jpg" width={104} height={104} alt="Capa do álbum 24K do Bruno Mars" />
              <strong>24K Magic</strong>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/capadoalbum.jpg" width={104} height={104} alt="Capa do álbum 24K do Bruno Mars" />
              <strong>24K Magic</strong>
            </a>
            <a href='#' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/capadoalbum.jpg" width={104} height={104} alt="Capa do álbum 24K do Bruno Mars" />
              <strong>24K Magic</strong>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>
            Made for Junior Oliveira
          </h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/capadoalbum.jpg" width={120} height={120} alt="Capa do álbum 24K do Bruno Mars" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/capadoalbum.jpg" width={120} height={120} alt="Capa do álbum 24K do Bruno Mars" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/capadoalbum.jpg" width={120} height={120} alt="Capa do álbum 24K do Bruno Mars" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/capadoalbum.jpg" width={120} height={120} alt="Capa do álbum 24K do Bruno Mars" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/capadoalbum.jpg" width={120} height={120} alt="Capa do álbum 24K do Bruno Mars" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
          </div>

        </main>
      </div>
      <Footer />
    </div>
  )
}