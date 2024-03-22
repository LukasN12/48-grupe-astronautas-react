import style from './Footer.module.css';

function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.socials}>
                <a className={style.socialLink} href="/">
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                <a className={style.socialLink} href="/">
                    <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a className={style.socialLink} href="/">
                    <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                <a className={style.socialLink} href="/">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
            </div>
        <p className="copyright-text">&copy; 2024 - All rights reserved /</p>
    </footer>
    );
}

export { Footer };