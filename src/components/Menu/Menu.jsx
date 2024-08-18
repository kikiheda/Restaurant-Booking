import "./Menu.scss"

const Menu = () => {
    return (
      <div className="menu-form">
        <nav className="menu-form__nav">
          <ul className="menu-form__navList">
            <li className="menu-form__navItem">Breakfast</li>
            <li className="menu-form__navItem">Lunch</li>
            <li className="menu-form__navItem">Dinner</li>
            <li className="menu-form__navItem">Wine</li>
          </ul>
        </nav>
      </div>
    );
}

export default Menu;