import { Link, NavLink } from "react-router-dom";

export function MainHeader() {
  return (
    <div>
      <header className="app-header">
        <section className="container">
          <h1>DZ mail</h1>
          <nav className="">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mails</NavLink>
          </nav>
        </section>
      </header>
    </div>
  );
}
