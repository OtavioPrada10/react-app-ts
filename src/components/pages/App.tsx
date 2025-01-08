import Formulario from '../formulario/index.tsx'
import Lista from '../lista/index.tsx';
import style from './App.module.scss'

function App() {

  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista/>
    </div>
  );
};

export default App;
