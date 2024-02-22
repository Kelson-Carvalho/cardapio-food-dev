import { useContext } from "react";
import "./produto-cart.css";
import { CartContext } from "../contexts/cart-contex";

function ProdutoCart(props) {
  const { AddItemCart, RemoveItemCart } = useContext(CartContext);

  function AddItem() {
    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1,
    };

    AddItemCart(item);
  }

  function RemoveItem(){
    RemoveItemCart(props.id);
  }

  return (
    <>
      <div className="product-cart-box">
        <img src={props.foto} alt="Hamburguer" />

        <div className="content">
          <p className="produtc-cart-name">{props.nome}</p>
          <p className="produtc-cart-price">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.preco)}
          </p>

          <div className="product-cart-footer">
            <div>
              <button onClick={RemoveItem} className="btn product-footer-btn">-</button>
              <span className="product-footer-qtd">{props.qtd}</span>
              <button onClick={AddItem} className="btn product-footer-btn">+</button>
            </div>

            <p className="product-footer-price text-right">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(props.preco * props.qtd)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProdutoCart;
