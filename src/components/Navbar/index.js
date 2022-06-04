import './styles.scss';

function Navbar() {
    return (
        <header>
            <a href="/" className="brand-name">focused</a>
                <div
                className="nav">
                <ul className="nav-list">
                <li>
                    <a href="/articles">articles</a>
                </li>
                <li>
                    <a href="/resources">resources</a>
                </li>
                <li>
                    <a href="/chat">chat</a>
                </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;