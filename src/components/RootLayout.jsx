import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
    return (
        <>
            <header>
                <h2>Counter App</h2>
                <nav className="menu">
                    {/* <button>Inicio</button>
                    <button>Items</button> */}
                    <Link className="item" to="/">Início</Link>
                    <Link className="item" to="/items">Items</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <hr />
                <p>Feito com React e React Router</p>
            </footer>
        </>
    );
}
