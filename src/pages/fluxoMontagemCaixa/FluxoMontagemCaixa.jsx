import React, {useEffect, useRef, useState} from "react";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/navbar/navbar";
import PageTitle from "../../component/pageTitle/PageTitle";
import styles from "./FluxoMontagemCaixa.module.css";
import {getCategoriasPorEstagio, getProdutos} from "../../utils/backend/methods";
import {toast} from "react-toastify";
import EscolhaGenero from "../../component/componentsMontagemCaixa/EscolhaGenero";

const FluxoMontagemCaixa = () => {
    const [estagio, setEstagio] = useState(0);
    const [categorias, setCategorias] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [produtosSelecionados, setProdutosSelecionados] = useState([]);
    const [genero, setGenero] = useState('')
    const quantTotalEsperadaRef = useRef({});

    useEffect(() => {
        if (estagio > 0 && estagio <= 3) {
            getCategoriasPorEstagio(estagio).then((response) => {
                setCategorias(response.data);
            });
        }

    }, [estagio]);

    useEffect(() => {
        produtosSelecionados.forEach((produto) => {
            let produtoElement = document.getElementById(`prod-${produto.idProduto}`);
            if (produtoElement) {
                produtoElement.classList.add(styles["selected"]);
            }
        });
    }, [categorias]);

    useEffect(() => {
        if (genero !== '') {
            getProdutos().then((response) => {
                setProdutos(response.data.filter(produto => produto.genero === genero || produto.genero === 'U'));
            });
        }
    }, [genero]);

    useEffect(() => {
        quantTotalEsperadaRef.current["est"+estagio] = categorias.reduce((total, categoria) => total + categoria.qtdeProdutos, 0);
    }, [categorias]);

    const selectProduto = (id, quantMax, idCategoria) => {

        let produto = document.getElementById(`prod-${id}`);
        if(produto.classList.contains(styles["selected"])) {
            produto.classList.remove(styles["selected"]);
            setProdutosSelecionados(produtosSelecionados.filter(produto => produto.idProduto !== id));
        } else if(produtosSelecionados.filter(produto => produto.idCategoria === idCategoria).length >= quantMax) {
            toast.error("Você já selecionou o número máximo de produtos para esta categoria. Desmarque um produto para selecionar outro.");
        }else {
            produto.classList.add(styles["selected"]);
            setProdutosSelecionados([...produtosSelecionados, {idProduto: id, idCategoria: idCategoria}]);
        }

    }

    const handleBack = () => {
        setEstagio(estagio - 1);
    }

    const handleDisabled = () => {
        return genero === ''
        ||
        quantTotalEsperadaRef.current["est"+estagio] !== produtosSelecionados
            .filter(produto => categorias.map(categoria => categoria.id).includes(produto.idCategoria))
            .length;
    }

    const handleNext = () => {
        if (!handleDisabled()) {
            setEstagio(2);
        }
    }

    return (
        <>
            <Navbar />
            <main>
                <PageTitle title="Caixa Online" />

                <div className={styles["estagios"]}>
                    <ul>
                        <li className={`${estagio >= 0 ? styles['active'] : ''}`}><span
                            className="material-symbols-outlined">orders</span></li>
                        <div className={`${styles["connector"]} ${estagio >= 0 ? styles['active'] : ''}`}></div>
                        <li className={`${estagio >= 1 ? styles['active'] : ''}`}><span
                            className="material-symbols-outlined">apparel</span></li>
                        <div className={`${styles["connector"]} ${estagio >= 2 ? styles['active'] : ''}`}></div>
                        <li className={`${estagio >= 2 ? styles['active'] : ''}`}><span
                            className="material-symbols-outlined">local_library</span></li>
                        <div className={`${styles["connector"]} ${estagio >= 3 ? styles['active'] : ''}`}></div>
                        <li className={`${estagio >= 3 ? styles['active'] : ''}`}><span
                            className="material-symbols-outlined">toys</span></li>
                        <div className={`${styles["connector"]} ${estagio >= 4 ? styles['active'] : ''}`}></div>
                        <li className={`${estagio >= 4 ? styles['active'] : ''}`}><span
                            className="material-symbols-outlined">box</span></li>
                    </ul>
                </div>

                {

                estagio === 0 &&
                    // Coleta de Gênero e Idade
                    <>
                        <div className={styles["text-info"]}>
                            <h2>Montar uma caixa para:</h2>
                        </div>
                        <EscolhaGenero setGenero={setGenero}></EscolhaGenero>
                    </>
                }
                {
                    estagio >= 1 && estagio <= 3 &&
                    <>
                    <div className={styles["text-info"]}>
                            <h2>Escolha a quantidade indicada</h2>
                        </div>

                        {
                            categorias.map((categoria) => {
                                return (
                                    <div key={categoria.id} className={styles["categoria"]}>
                                        <h2>{categoria.nome} ({produtosSelecionados.filter(produto => produto.idCategoria === categoria.id).length}/{categoria.qtdeProdutos})</h2>
                                        <div className={styles['separator']}></div>
                                        <div className={styles["produtos"]}>
                                            {produtos.filter(produto => produto.categoria.id === categoria.id)
                                                    .map((produto) => {
                                                        return (
                                                            <div onClick={() => {
                                                                selectProduto(produto.id, categoria.qtdeProdutos, categoria.id);
                                                            }} key={produto.id} id={`prod-${produto.id}`} className={styles["produto"]}>
                                                                <img src={produto.urlImagem} alt={produto.nome}/>
                                                                <span>{produto.nome}</span>
                                                            </div>
                                                        );
                                                    })
                                            }
                                        </div>
                                    </div>
                                );
                            })
                        }

                    </>
                }
                {
                    estagio === 4 &&
                    //Carta e Caixa confirmação de caixa
                    <></>
                }

                <div className={styles["buttons"]}>
                    <button onClick={handleBack} style={{display: estagio === 0? 'none' : ''}}>Voltar
                    </button>
                    <button className={styles['next']} onClick={handleNext} disabled={handleDisabled()}>Próximo
                    </button>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default FluxoMontagemCaixa;