function Header() {
  return (
    <header className="header">
      <a className="brand" href="#home">My App</a>
      <nav aria-label="Main navigation">
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
