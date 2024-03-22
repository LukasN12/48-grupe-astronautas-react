import style from './Nav.module.css';
import { Link } from './Link';

function Nav() {
    return (
        <nav className={style.mainNav}>
                <Link title="About" />
                <Link title="Jobs" isActive={true} />
                <Link title="Portfolio"  />
                <Link title="Contact" />
            </nav>
    );
}

export { Nav };