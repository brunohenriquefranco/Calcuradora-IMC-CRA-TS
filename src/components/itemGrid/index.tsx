import { level } from "../../Helpers/imc";
import style from './itemGride.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';


type Props = {
    item:level
}
export const GridItem = ({item}:Props) =>{
    return(
        <div className={style.main} style={{backgroundColor:item.color}}>
            <div className={style.gridIcon}>
                <img src={item.icon === 'up'?upImage:downImage} alt="" width="30"/>
            </div>
            <div className={style.gridtitle}>{item.title}</div>

            {item.yourImc &&
                <div className={style.yourImc}>Seu IMC é de {item.yourImc} kg</div>
            
            }

            <div className={style.gridinfo}>
                <>
                    Imc está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}