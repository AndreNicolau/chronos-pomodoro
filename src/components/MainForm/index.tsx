import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import type { HomeProps } from '../../pages/Home';

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState((prevState) => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: '22:45',
      };
    });
  }

  return (
    <form className='form' action=''>
      <div>
        <button type='button' onClick={handleClick}>Clicar</button>
      </div>
      <div className='formRow'>
        <DefaultInput
          type='text'
          id='meuInput'
          labelText='Task'
          placeholder='Insira algo'
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de {state.config.workTime}min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
