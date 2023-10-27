import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
   
    const listaLocalStorage= JSON.parse(localStorage.getItem("Lista"));
    const [produto, setProduto]= useState("");
    const [marca, setMarca]= useState("");
    const [preco, setPreco]= useState("");
    const [lista,setLista]= useState(listaLocalStorage || []);
    const [img,setImg]= useState("");
    const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

    useEffect(()=> {localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);
    
    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista,{
            produto: produto, marca: marca, preco: preco, id:id, img: img
        }]);
        setId(id + 1);
        setProduto("");
        setMarca("");
        setPreco("");
        setImg("");

    }

    const remover = (id) => {
        const limpaLista = lista.filter((item) => item.id !== id);
        setLista(limpaLista);
    }

    return (
        <div>
            <h1>Produtinhos</h1>
            <Link to="/">home</Link>

        <p>{produto}, {marca}, {preco}</p>

            <form onSubmit={salvar}>
                <p>Produto:</p>
                <input class="form-control" type="text" placeholder="Produto" aria-label="default input example" value={produto}
                    onChange={(e) => setProduto(e.target.value)}/>

                <p>Marca:</p>
                <input class="form-control" type="text" placeholder="Marca" aria-label="default input example" value={marca}
                    onChange={(e) => setMarca(e.target.value)}/>

                <p>Preço:</p>
                <input class="form-control" type="number" placeholder="Preço" aria-label="default input example" value={preco}
                    onChange={(e) => setPreco(e.target.value)}/>
                
                <p>Imagem:</p>
                <input class="form-control" type="text" placeholder="Link da imagem" aria-label="default input example" value={img}
                    onChange={(e) => setImg(e.target.value)}/>

                <br/>

                <button class="btn btn-outline-dark">ADD</button>
            </form>
           {lista.map((ativ)=> 
                <div key= {ativ.id}>
                    <Link to={'/detalhe/${ativ.id}'}>
                    <p>{ativ.atividade}</p>
                    </Link>
                    <p><img src={ativ.img} alt=""/></p>
                    <p>Produto: {ativ.produto}, Marca: {ativ.marca}, R$: {ativ.preco} </p>
                     <br/>
                    <button class="btn btn-outline-dark" onClick={() => remover (ativ.id)}>Remover</button>
                </div>
            )}
        </div>
    );
}