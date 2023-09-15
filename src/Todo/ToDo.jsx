import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
   
    const [produto, setProduto]= useState("");
    const [marca, setMarca]= useState("");
    const [preco, setPreco]= useState("");
    const [lista,setLista]= useState([]);
    const [id,setId] = useState(1);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista,{
            produto: produto, marca: marca, preco: preco, id:id
        }]);
        setId(id + 1);
        setProduto("");
        setMarca("");
        setPreco("");

    }

    return (
        <div>
            <h1>Produtinhos</h1>
            <Link to="/">home</Link>

        <p>{produto}, {marca}, {preco}</p>

            <form onSubmit={salvar}>
                <p>Produto:</p>
                <input value={produto} type="text"
                    onChange={(e) => setProduto(e.target.value)}/>

                <p>Marca:</p>
                <input value={marca} type="text"
                    onChange={(e) => setMarca(e.target.value)}/>

                <p>Preço:</p>
                 <input value={preco} type="number"
                    onChange={(e) => setPreco(e.target.value)}/>


                <button class="btn btn-outline-dark">ADD</button>
            </form>
           {lista.map((ativ)=> <p>Produto: {ativ.produto}, Marca: {ativ.marca}, R$: {ativ.preco}</p>)}
        </div>
    );
}