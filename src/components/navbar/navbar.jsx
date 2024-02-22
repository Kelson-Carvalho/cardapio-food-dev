import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";
import Cart from "../cart/cart";
import { Link } from "react-router-dom";

function Navbar(props) {
  function openPedido() {
    const event = new CustomEvent("openPedido");
    window.dispatchEvent(event);
  }

  return (
    <>
      <div className="navbar">
        <Link to="/">
        <img className="logotipo" src={logo} alt="Logotipo" />
        </Link>

        {props.showMenu && (
          <div className="menu">
            <Link to="/historico">Historico</Link>
            <button onClick={openPedido} className="btn btn-red">
              <img className="icon" src={bag} alt="icon" />
              Sacola
            </button>
          </div>
        )}

        <Cart />
      </div>
    </>
  );
}

export default Navbar;
