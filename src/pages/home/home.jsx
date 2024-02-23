import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine";
import api from "../../services/api.js"

function Home() {

  const[produtos,setProdutos] = useState([]);

  useEffect(() => {
    api.get("/produtos")
    .then((resp) =>{
      setProdutos(resp.data);
    })
    .catch((err) => {
      alert('Erro ao carregar produtos')
    })
  },[]);

  return (
    <>
      <Navbar showMenu={true} />
      <section className="container">
        <div className="titulo text-center">
          <h1>Nosso Cardápio</h1>
          <p className="subtitulo">
            Clique em adicionar para colocar os produtos na sacola de compra. Se
            preferir, você pode pedir pelo whatsapp: (61) 99999-9999.
          </p>
        </div>
      </section>

      <section className="text-center">
        {produtos.map(function (prod) {
          return <ProdutoVitrine
                  key={prod.id_produto}
                  id={prod.id_produto}
                  nome={prod.nome}
                  descricao={prod.descricao}
                  preco={prod.preco}
                  foto={prod.foto}
                 />;
        })}
      </section>
    </>
  );
}

export default Home;
