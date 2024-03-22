import style from './Btn.module.css'

export function Btn(props) {
    const { title, color } = props;
    let colorClass = '';

    if (color === 'white') {
        colorClass = style.btnWhite;
    }
    if (color === 'green') {
        colorClass = style.btnGreen;
    }

    return <a className={`${style.btn} ${colorClass}`} href="/">{title}</a>

}