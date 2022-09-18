import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog"

export function CreateAdBanner() {
    return (
        <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
            <div className='bg-[#2A2634] py-8 px-6 flex justify-between items-center'>
            <div>
                <strong className='block text-2xl text-white font-black'>Não encontrou seu duo?</strong>
                <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
            </div>
            <Dialog.Trigger className='flex gap-3 px-4 py-3 bg-violet-500 text-white rounded transition hover:bg-violet-600'>
                <MagnifyingGlassPlus size={24} />
                Publicar Anúncio
            </Dialog.Trigger>
            </div>
        </div>
    )
}