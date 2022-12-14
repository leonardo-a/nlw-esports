import * as Dialog from "@radix-ui/react-dialog"
import * as Checkbox from "@radix-ui/react-checkbox"
import * as ToggleGroup from "@radix-ui/react-toggle-group"
import * as Select from "@radix-ui/react-select"
import { Check, GameController, ArrowDown, ArrowUp } from "phosphor-react"
import { FormEvent, useEffect, useState } from "react"
import axios from 'axios';

import { Input } from "./Forms/Input"

interface Game {
    id: string;
    title: string;
  }

export function CreateAdModal(){

    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)

    useEffect(() => {
        axios("http://localhost:3333/games").then(response => {
            setGames(response.data)
        })
    }, [])

    async function handleCreateAd(event: FormEvent){
        event.preventDefault();
        
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        if(!data.name && !data.game){
            return;
        }

        try{
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: useVoiceChannel
            })
 
            alert("Anúncio criado com Sucesso!");
        } catch(err){
            console.log("Erro: ", err);
            alert("Erro ao criar o anúncio!")
        }
        

        console.log("Data: ", data); 


    }

    return (
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-4 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/40">
            <Dialog.Title className="text-3xl font-black">
              Publique um Anúncio
            </Dialog.Title>
            <form onSubmit={handleCreateAd} className="flex flex-col gap-4 mt-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o game?</label>
                
                <Select.Root key="game"
                  name="game"
                >
                  <Select.Trigger 
                    className="flex justify-between items-center text-sm rounded bg-zinc-900 py-3 px-4"
                  >
                    <Select.Value className="text-center" placeholder="Selecione um jogo..."/>
                    <Select.SelectIcon>
                      <ArrowDown /> 
                    </Select.SelectIcon>
                  </Select.Trigger>
                  <Select.Portal >
                    <Select.Content>
                      <Select.Viewport  className="text-white bg-zinc-700 rounded text-sm overflow-auto">

                      {
                        games.map( game => {
                          return (
                            <Select.Item  key={game.id} value={game.id} className="px-4 py-3 cursor-pointer hover:bg-zinc-800">
                              <Select.ItemText>{game.title}</Select.ItemText>
                              <Select.ItemIndicator />
                            </Select.Item>

                          )
                        })
                      }

                      </Select.Viewport>
                    </Select.Content>
                    </Select.Portal>
                </Select.Root>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome(ou nickname)</label>
                <Input id="name" name="name" placeholder="Como te chamam dentro do game?" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                  <Input id="yearsPlaying" name="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu discord?</label>
                  <Input id="discord" name="discord" placeholder="Usuario#0000" />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma joga?</label>
                <ToggleGroup.Root 
                    type="multiple" 
                    id="weekDays"
                    className="grid grid-cols-5 gap-1"
                    value={weekDays}
                    onValueChange={setWeekDays}
                >
                    <ToggleGroup.Item 
                      value="0"
                      title="Domingo"
                      className={`w-8 h-8 text-center rounded ${ weekDays.includes("0") ? 'bg-violet-500' : 'bg-zinc-900'} transition hover:bg-violet-600`}
                    >
                      D
                    </ToggleGroup.Item>
                    <ToggleGroup.Item 
                      value="1"
                      title="Segunda"
                      className={`w-8 h-8 text-center rounded ${ weekDays.includes("1") ? 'bg-violet-500' : 'bg-zinc-900'} transition hover:bg-violet-600`}
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item 
                      value="2"
                      title="Terça"
                      className={`w-8 h-8 text-center rounded ${ weekDays.includes("2") ? 'bg-violet-500' : 'bg-zinc-900'} transition hover:bg-violet-600`}
                    >
                      T
                    </ToggleGroup.Item>
                    <ToggleGroup.Item 
                      value="3"
                      title="Quarts"
                      className={`w-8 h-8 text-center rounded ${ weekDays.includes("3") ? 'bg-violet-500' : 'bg-zinc-900'} transition hover:bg-violet-600`}
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item 
                      value="4"
                      title="Quinta"
                      className={`w-8 h-8 text-center rounded ${ weekDays.includes("4") ? 'bg-violet-500' : 'bg-zinc-900'} transition hover:bg-violet-600`}
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item 
                      value="5"
                      title="Sexta"
                      className={`w-8 h-8 text-center rounded ${ weekDays.includes("5") ? 'bg-violet-500' : 'bg-zinc-900'} transition hover:bg-violet-600`}
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item 
                      value="6"
                      title="Sábado"
                      className={`w-8 h-8 text-center rounded ${ weekDays.includes("6") ? 'bg-violet-500' : 'bg-zinc-900'} transition hover:bg-violet-600`}
                    >
                      S
                    </ToggleGroup.Item>
                </ToggleGroup.Root>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hours">Qual horário do dia?</label>
                  <div id="hours" className="grid grid-cols-2 gap-2">
                    <Input type="time" id="hourStart" name="hourStart" placeholder="De" />
                    <Input type="time" id="hourEnd" name="hourEnd" placeholder="Até" />
                  </div>
                </div>
              </div>
              <label className="mt-2 flex item-center gap-2 text-sm">
                <Checkbox.Root 
                    id="useVoiceChannel" 
                    name="useVoiceChannel" 
                    className="w-6 h-6 p-1 rounded bg-zinc-900"
                    checked={useVoiceChannel}
                    onCheckedChange={(checked) => {
                        if(checked === true){
                            setUseVoiceChannel(true);
                        } else {
                            setUseVoiceChannel(false)
                        }
                    }}
                >
                    <Checkbox.Indicator>
                        <Check className="w-4 h-4 text-emerald-400" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                Costumo de conectar ao chat de voz
              </label>
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
    )
}