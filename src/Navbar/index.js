import './styles.scss';

function Navbar() {
    return (
        <nav>
            <a href="/" className="brand-name">Focused</a>
                <div
                className="navigation-links">
                <ul>
                <li>
                    <a href="/articles">Articles</a>
                </li>
                <li>
                    <a href="/resources">Resources</a>
                </li>
                <li>
                    <a href="/chat">Chat</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;