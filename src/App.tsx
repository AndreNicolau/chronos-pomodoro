import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  console.clear();
  console.log('Olá Mundo!');

  return (
    <>
      <Heading />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </>
  );
}
