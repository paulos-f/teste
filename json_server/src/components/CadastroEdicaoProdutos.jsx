import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';
import './CadastroProdutosCSS.css'

export default function ProductFormPage() {
    // Definindo os estados para o formulário de produto
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [id, setId] = useState("");
    const [edit, setEdit] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const url = 'http://localhost:3000/products';

    // feito para verificar se está editando um produto existente
    // useEffect ta sendo usado para carregar dados de um produto quando a página é carregada ou quando location.state muda.
    useEffect(() => {
        if (location.state?.product) {
            const { product } = location.state;
            setName(product.name);
            setPrice(product.price);
            setStock(product.stock);
            setId(product.id);
            setEdit(true);
        }
    }, [location.state]);

    // Função para limpar o formulário
    const clearForm = () => {
        setName("");
        setPrice("");
        setStock("");
        setId("");
        setEdit(false);
    }

    // Função para salvar o produto (criar ou atualizar)
    const saveProduct = async (e) => {
        e.preventDefault();
        const saveRequestParams = {
            method: edit ? "PUT" : "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ name, price, stock })
        }

        // Cria URL para salvar ou atualizar produto
        const save_url = edit ? url + `/${id}` : url;

        // Faz a requisição HTTP
        const res = await fetch(save_url, saveRequestParams);
        await res.json();

        clearForm();
        navigate('/cadastro-produto');
    }

    // Mudança dos estados ao digitar no formulário
    const handleName = (e) => { setName(e.target.value) };
    const handlePrice = (e) => { setPrice(e.target.value) };
    const handleStock = (e) => { setStock(e.target.value) };

    return (
        <div>
            <ProductForm
                name={name}
                price={price}
                stock={stock}
                handleName={handleName}
                handlePrice={handlePrice}
                handleStock={handleStock}
                saveProduct={saveProduct}
            />
            <button onClick={() => navigate('/cadastro-produto')} className='l-button'>Voltar</button>
        </div>
    );
}
