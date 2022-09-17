import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.svg'

import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt='NLW' />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game-1.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-desc-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game-2.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-desc-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game-3.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-desc-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game-4.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-desc-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game-5.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-desc-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game-6.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-desc-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2A2634] py-8 px-6 flex justify-between items-center'>
          <div>
            <strong className='block text-2xl text-white font-black'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='flex gap-3 px-4 py-3 bg-violet-500 text-white rounded transition hover:bg-violet-600'>
            <MagnifyingGlassPlus size={24} />
            Publicar Anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
