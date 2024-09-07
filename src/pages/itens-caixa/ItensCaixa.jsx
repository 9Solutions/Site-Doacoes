import React, { useEffect, useState } from 'react';
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import styles from './ItensCaixa.module.css';
import cartIcon from "../../utils/img/cart-icon.png"
import PageTitle from "../../component/pageTitle/PageTitle";
import {getProdutos} from "../../utils/backend/methods";
import {useNavigate} from "react-router-dom";

function ItensCaixa() {

    const [isActive, setIsActive] = useState(false);
    const produtosSelecionados = JSON.parse(sessionStorage.getItem("produtos_selecionados"));
    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!produtosSelecionados) {
            navigate('/montagem-caixa');
        }

        getProdutos().then((response) => {
            let produtosFiltrados = response.data.filter(produto => produtosSelecionados.some(p => p.idProduto === produto.id))
            setProdutos(produtosFiltrados);
        });
    }, []);

    useEffect(() => {
        setIsActive(true);
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCart = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <NavBar />
            <main className={styles['caixa-content']}>
                <PageTitle title="Caixa Online" />

                <div className={styles["estagios"]}>
                    <ul>
                        <li className={`${styles['active']}`}><span
                            className="material-symbols-outlined">orders</span></li>
                        <div className={`${styles["connector"]} ${styles['active']}`}></div>
                        <li className={`${styles['active']}`}><span
                            className="material-symbols-outlined">apparel</span></li>
                        <div className={`${styles["connector"]} ${styles['active']}`}></div>
                        <li className={`${styles['active']}`}><span
                            className="material-symbols-outlined">local_library</span></li>
                        <div className={`${styles["connector"]} ${styles['active']}`}></div>
                        <li className={`${styles['active']}`}><span
                            className="material-symbols-outlined">toys</span></li>
                        <div className={`${styles["connector"]} ${styles['active']}`}></div>
                        <li className={`${styles['active']}`}><span
                            className="material-symbols-outlined">box</span></li>
                    </ul>
                </div>

                <h3>Itens da sua caixa - Valor final: R$ 78,00</h3>
                <div className={styles['item-container']}>

                    <div className={styles['item-list']}>
                        {
                            produtos.map((produto) => (
                                <div className={styles['item']}>
                                    <img src={produto.urlImagem} alt={produto.nome} className={styles['item-image']} />
                                    <p>{produto.nome}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div className={styles['buttons']}>
                    <button className={styles['back-button']}>Voltar</button>
                    <button className={styles['next-button']} onClick={handleAddToCart}>Adicionar ao Carrinho</button>
                </div>

                {isModalOpen && (
                    <div className={styles['modal']} onClick={handleCloseModal}>
                        <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
                            <button className={styles['close-button']} onClick={handleCloseModal}>×</button>
                            <img src={cartIcon} alt="Carrinho" className={styles['cart-icon']} />
                            <p className={styles['caixa-add']}>CAIXA ADICIONADA AO CARRINHO</p>
                            <button className={styles['view-cart-button']} onClick={() => navigate("/carrinho")}>Visualizar Carrinho</button>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default ItensCaixa;
