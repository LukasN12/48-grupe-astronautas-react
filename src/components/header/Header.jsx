function Header() {
    return (
        <header class="container">
            <img class="logo" src="../components/img/logo.webp" alt="Logo" />
            <nav class="main-nav">
                <button class="nav-link active" href="#">About</button>
                <button class="nav-link" href="#">Portfolio</button>
                <button class="nav-link" href="#">Job</button>
                <button class="nav-link" href="#">Contact</button>
            </nav>
        </header>
    );
}

export { Header };