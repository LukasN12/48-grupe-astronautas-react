import { BtnList } from "../btn/BtnList";
import { Description } from "../description/Description";
import { MainTitle } from "../mainTitle/MainTitle";
import style from './Main.module.css';
import mainImg from '../assets/img/astronautas.png';

function Main() {
    return (
        <main className="container">
            <div className="columnLeft">
                <MainTitle />
                <Description />
                <BtnList />
            </div>
            <div className="columnRight">
                <img className={style.mainImg} src={mainImg} alt="Astronautas raso zinute namo, nes isskrido i kosmosa"></img>
            </div>
        </main>
    );
}

export { Main };