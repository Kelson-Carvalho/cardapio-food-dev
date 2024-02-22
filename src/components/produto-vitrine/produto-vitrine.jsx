import "./produto-vitrine.css";
import bag from "../../assets/bag-black.png";
import { CartContext } from "../contexts/cart-contex.jsx";
import { useContext } from "react";

function ProdutoVitrine(props) {
  const { AddItemCart } = useContext(CartContext);

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

  return (
    <>
      <div className="produto-box text-center">
        <img src={props.foto} alt="Foto do item do produto" />

        <div>
          <h2>{props.nome}</h2>
          <p className="product-vitri-description">{props.descricao}</p>
          <p className="product-vitri-price">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.preco)}
          </p>
        </div>

        <div>
          <button onClick={AddItem} className="btn btn-cart">
            <img className="icon" src={bag} alt="icon" />
            Adicionar
          </button>
        </div>
      </div>
    </>
  );
}

export default ProdutoVitrine;
