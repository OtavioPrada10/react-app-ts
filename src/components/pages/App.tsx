import { Cronometro } from '../Cronometro/index.tsx';
import Formulario from '../Formulario/index.tsx'
import Lista from '../Lista/index.tsx';
import style from './App.module.scss'

function App() {

  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista/>
      <Cronometro/>
    </div>
  );
};

export default App;
