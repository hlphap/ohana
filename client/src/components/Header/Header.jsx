import "./Header.scss";

function Header() {
    return (
        <div className="header">
            <ul className="header__list">
                <li className="header__item">
                    <a href="/" className="header__item-link">
                        <i className="header__item-icon"></i>
                        <span className="header__item-title">Tải App</span>
                    </a>
                </li>
                <li className="header__item">
                    <a href="/" className="header__item-link">
                        <i className="header__item-icon"></i>
                        <span className="header__item-title">
                            Đăng phòng dễ dàng
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
