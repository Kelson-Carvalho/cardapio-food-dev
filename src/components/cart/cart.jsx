import { useEffect, useState, useContext } from "react";
import { Dock } from "react-dock";
import ProdutoCart from "../produto-cart/produto-cart.jsx";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/cart-contex.jsx";
import close from "../../assets/close.png";
import bagBlack from "../../assets/bag-black.png";

function Cart() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const { cartItems, totalCart } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("openPedido", function () {
      setShow(true);
    });
  }, []);

  function checkout() {
    navigate("/checkout");
  }

  return (
    <Dock
      position="right"
      isVisible={show}
      fluid={false}
      size={360}
      onVisibleChange={function (visible) {
        setShow(visible);
      }}
    >
      {cartItems === 0 ? (
        <div className="cart-empty">
          <img
            onClick={(e) => setShow(false)}
            src={close}
            className="cart-btn-close"
            alt="botao fecha cart"
          />
          <div className="text-center">
            <img src={bagBlack} alt="sacola" />
            <p>Sua sacola está vazia</p>
          </div>
        </div>
      ) : (
        <>
          <div className="text-center">
            <img
              onClick={(e) => setShow(false)}
              src={close}
              className="cart-btn-close"
              alt="botao fecha cart"
            />
            <h1 className="hh1">Meu Pedido</h1>
          </div>

          <div className="product-list">
            {cartItems.map(function (item) {
              return (
                <ProdutoCart
                  key={item.id}
                  id={item.id}
                  foto={item.foto}
                  nome={item.nome}
                  qtd={item.qtd}
                  preco={item.preco}
                />
              );
            })}
          </div>

          <div className="cart-footer">
            <div className="cart-footer-price">
              <span>Total</span>
              <span>
                <strong>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalCart)}
                </strong>
              </span>
            </div>

            <div>
              <button onClick={checkout} className="btn btn-checkout">
                Finalizar Pedido
              </button>
            </div>
          </div>
        </>
      )}
    </Dock>
  );
}

export default Cart;
