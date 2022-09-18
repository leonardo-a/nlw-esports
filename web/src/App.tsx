import "./styles/main.css"
import logoImg from "./assets/logo-nlw-esports.svg"

import { GameController, MagnifyingGlassPlus } from "phosphor-react"
import { GameBanner } from "./components/GameBanner"
import { CreateAdBanner } from "./components/CreateAdBanner"
import { useEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Input } from "./components/Forms/Input"

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])


  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt="NLW" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(data => {
          return (
            <GameBanner
              key={data.id}
              bannerUrl={data.bannerUrl}
              title={data.title}
              adsCount={data._count.ads}
            />
          )
        })}

      </div>

      <Dialog.Root >
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-4 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/40">
            <Dialog.Title className="text-3xl font-black">
              Publique um Anúncio
            </Dialog.Title>
            <form className="flex flex-col gap-4 mt-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o game?</label>
                <Input
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome(ou nickname)</label>
                <Input id="name" placeholder="Como te chamam dentro do game?" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                  <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu discord?</label>
                  <Input id="discord" placeholder="Usuario#0000" />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma joga?</label>
                  <div className="grid grid-cols-5 gap-1">
                    <button 
                      title="Domingo"
                      className="w-8 h-8 text-center transition rounded bg-zinc-900 hover:bg-violet-600"
                    >
                      D
                    </button>
                    <button 
                      title="Segunda"
                      className="w-8 h-8 text-center transition rounded bg-zinc-900 hover:bg-violet-600"
                    >
                      S
                    </button>
                    <button 
                      title="Terça"
                      className="w-8 h-8 text-center transition rounded bg-zinc-900 hover:bg-violet-600"
                    >
                      T
                    </button>
                    <button 
                      title="Quarts"
                      className="w-8 h-8 text-center transition rounded bg-zinc-900 hover:bg-violet-600"
                    >
                      Q
                    </button>
                    <button 
                      title="Quinta"
                      className="w-8 h-8 text-center transition rounded bg-zinc-900 hover:bg-violet-600"
                    >
                      Q
                    </button>
                    <button 
                      title="Sexta"
                      className="w-8 h-8 text-center transition rounded bg-zinc-900 hover:bg-violet-600"
                    >
                      S
                    </button>
                    <button 
                      title="Sábado"
                      className="w-8 h-8 text-center transition rounded bg-zinc-900 hover:bg-violet-600"
                    >
                      S
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hours">Qual horário do dia?</label>
                  <div id="hours" className="grid grid-cols-2 gap-2">
                    <Input type="time" id="hourStart" placeholder="De" />
                    <Input type="time" id="hourEnd" placeholder="Até" />
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-2 text-sm">
                <Input id="useVoiceChannel" type="checkbox" />
                Costumo de conectar ao chat de voz
              </div>
              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close 
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold transition hover:bg-zinc-600 hover:shadow-md"
                >
                  Cancelar
                </Dialog.Close>
                <button 
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex gap-3 items-center transition hover:bg-violet-600 hover:shadow-md" 
                  type="submit"
                >
                  <GameController size={24}/>
                  Encontrar Duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
