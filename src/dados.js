

const produtos = [
    {
        id: 1, 
        nome: "Spicy Burguer", 
        descricao: "Hamburguer de 250g, queijo, tomate, alface e cebola", 
        preco: 24.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/spicy.png"
    },
    {
        id: 2, 
        nome: "Sanduba", 
        descricao: "Sanduiche natural, alface, tomate, pão integral e orégano", 
        preco: 22.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/sanduba.png"
    },
    {
        id: 3, 
        nome: "Super Burguer", 
        descricao: "Hamburguer de 300g, molho, queijo, tomate, alface e cebola", 
        preco: 29.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/super.png"
    },
    {
        id: 4, 
        nome: "Mega", 
        descricao: "Hamburguer de 300g, maionese, tomate, alface, queijo e cebola", 
        preco: 34.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/mega.png"
    },
    {
        id: 5, 
        nome: "Penne", 
        descricao: "Penne ao molho especial de tomates rústicos, ervas aromáticas e cebola", 
        preco: 27.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/penne.png"
    },
    {
        id: 6, 
        nome: "Fritas", 
        descricao: "Batata frita crocante com molho especial de maionese da casa", 
        preco: 14.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/fritas.png"
    },
    {
        id: 7, 
        nome: "Coca-Cola Lata", 
        descricao: "Coca-cola em lata de 300ml, trincando de gelada para você", 
        preco: 9.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/coca.png"
    }
];

 
const pedidos = [
    { id_pedido: 9874561, dt: "18/01/2024", total: 150.3 },
    { id_pedido: 9874562, dt: "20/01/2024", total: 99 },
    { id_pedido: 9874563, dt: "22/01/2024", total: 119.9 },
    { id_pedido: 9874564, dt: "24/01/2024", total: 37.2 },
    { id_pedido: 9874565, dt: "26/01/2024", total: 49.9 },
    { id_pedido: 9874566, dt: "28/01/2024", total: 78.8 },
    { id_pedido: 9874567, dt: "30/01/2024", total: 50.0 },
];

const carrinho = [
    {
        id: 1,
        nome: "X-Tudo",
        preco: 20.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/spicy.png",
        qtd: 2
    },
    {
        id: 2,
        nome: "Sanduba",
        preco: 15.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/sanduba.png",
        qtd: 1
    }
]

export {produtos, pedidos, carrinho}
