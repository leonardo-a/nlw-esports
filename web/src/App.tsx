import { useEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { GameController, MagnifyingGlassPlus } from "phosphor-react"

import "./styles/main.css"
import logoImg from "./assets/logo-nlw-esports.svg"
import { GameBanner } from "./components/GameBanner"
import { CreateAdBanner } from "./components/CreateAdBanner"
import { CreateAdModal } from "./components/CreateAdModal"

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
    axios("http://localhost:3333/games").then(response => {
        setGames(response.data)
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
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
