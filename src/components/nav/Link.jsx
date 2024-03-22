import style from './Nav.module.css';

function Link(params) {
    const activeClass = params.isActive ? style.active: '';
    return <a className={`${style.navLink} ${activeClass}`} href="/">{params.title}</a>
}

export { Link };