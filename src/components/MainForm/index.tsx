import { DefaultButton } from "../DefaultButton"
import { Cycles } from "../Cycles"
import { PlayCircleIcon } from "lucide-react"
import { DefaultInput } from "../DefaultInput"

export function MainForm () {
  return (
     <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              type='text'
              id='meuInput'
              labelText='Task'
              placeholder='Insira algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
  )
}