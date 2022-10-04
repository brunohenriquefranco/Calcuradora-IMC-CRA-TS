import { useState } from 'react';
import style from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import {GridItem} from './components/itemGrid/index';

import{levels , calculationImc, level} from './Helpers/imc'

const App = () => {
  const [heightField, setheightField] = useState<number>(0);
  const [weightField, setweightField] = useState<number>(0);
  const [toshowItem, settoshowItem] = useState<level | null>(null);

  const handleCalculationButton = ()=>{
    if(heightField && weightField){
      settoshowItem(calculationImc(heightField , weightField));
    }else{
      alert('Digite todos os campos abaixo!');
    }
  }

  const handleBackButton = () =>{
    settoshowItem(null);
    setheightField(0);
    setweightField(0);
  }
  return (
    <div className={style.main}>
        <header>
          <div className={style.headerContainer}>
              <img src={poweredImage} alt="Logo" />
          </div>
        </header>
        <div className={style.container}>
            <div className={style.leftSide}>
              <h1>Calcule o seu IMC.</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad velit deserunt dignissimos minima fugiat. Sint aperiam laboriosam placeat temporibus cumque voluptates in, deserunt tenetur quae, dignissimos explicabo minus architecto aliquam.</p>

              <input
                type="number"
                placeholder="Digite a sua altura ex: 1.5(Em metros...)"
                value={heightField > 0 ? heightField : ''}
                onChange={e => setheightField(parseFloat(e.target.value))} 
                disabled={toshowItem ? true : false}
              />

              <input
                type="number"
                placeholder="Digite a peso ex: 78(kg...)"
                value={weightField > 0 ? weightField : ''}
                onChange={e => setweightField(parseFloat(e.target.value))} 
                disabled={toshowItem ? true : false}
              />
              <button onClick={handleCalculationButton} disabled={toshowItem ? true : false}>Calcular</button>
            </div>
            <div className={style.rightSide}>
              {!toshowItem &&
                  <div className={style.grid}>
                    {levels.map((item , key)=>(
                    <GridItem  key={key} item={item} />
                    ))}
                  </div>
              }
              {toshowItem &&
                <div className={style.rightBig}>
                    <div className={style.Arrow} onClick={handleBackButton}>
                      <img src={leftArrowImage} alt="" width={25} />
                    </div>
                    <GridItem item = {toshowItem} />
                </div>
              }
                
            </div>
        </div>
    </div>
  );
}

export default App;
