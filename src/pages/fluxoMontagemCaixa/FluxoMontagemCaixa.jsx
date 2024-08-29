import React, {useEffect, useRef, useState} from "react";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/navbar/navbar";
import PageTitle from "../../component/pageTitle/PageTitle";
import styles from "./FluxoMontagemCaixa.module.css";
import {getCategoriasPorEstagio, getProdutos} from "../../utils/backend/methods";
import {toast} from "react-toastify";
import EscolhaGenero from "../../component/componentsMontagemCaixa/EscolhaGenero";
import EscolhaIdade from "../../component/componentsMontagemCaixa/EscolhaIdade";
import {useNavigate} from "react-router-dom";
import Cartinha from "../cartinha/cartinha";
import pessoa from '../../utils/img/pessoa.png'

const FluxoMontagemCaixa = () => {
    const [estagio, setEstagio] = useState(0);
    const [categorias, setCategorias] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [produtosSelecionados, setProdutosSelecionados] = useState([]);
    const [genero, setGenero] = useState('')
    const [faixa, setFaixa] = useState(-1)
    const [carta, setCarta] = useState('')
    const [foto, setFoto] = useState(pessoa)
    const quantTotalEsperadaRef = useRef({});

    const navigate = useNavigate();

    useEffect(() => {
        if (estagio > 1 && estagio <= 4) {
            getCategoriasPorEstagio(estagio-1).then((response) => {
                setCategorias(response.data);
            });
        }

        if (estagio === 6) {
            localStorage.setItem("produtos_selecionados", JSON.stringify(produtosSelecionados));
            //navigate('/carta')
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
        if (faixa !== -1) {
            getProdutos().then((response) => {
                setProdutos(response.data.filter(produto => produto.faixaEtaria.id === faixa));
                setCategorias([])
            });
        }
    }, [faixa]);

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
        console.warn(estagio === 5 , carta.length < 10)
        console.warn(quantTotalEsperadaRef.current["est"+estagio] !== produtosSelecionados
            .filter(produto => categorias.map(categoria => categoria.id).includes(produto.idCategoria))
            .length)

        return genero === ''
            ||
            (estagio === 1 && faixa === -1)
            ||
            (estagio === 5 && carta.length < 10)
            ||
            quantTotalEsperadaRef.current["est"+estagio] !== produtosSelecionados
                .filter(produto => categorias.map(categoria => categoria.id).includes(produto.idCategoria))
                .length;
    }

    const handleNext = () => {
        if (!handleDisabled()) {
            setEstagio(estagio + 1);
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
                        <div className={`${styles["connector"]} ${estagio >= 1 ? styles['active'] : ''}`}></div>
                        <li className={`${estagio >= 2 ? styles['active'] : ''}`}><span
                            className="material-symbols-outlined">apparel</span></li>
                        <div className={`${styles["connector"]} ${estagio >= 3 ? styles['active'] : ''}`}></div>
                        <li className={`${estagio >= 3 ? styles['active'] : ''}`}><span
                            className="material-symbols-outlined">local_library</span></li>
                        <div className={`${styles["connector"]} ${estagio >= 4 ? styles['active'] : ''}`}></div>
                        <li className={`${estagio >= 4 ? styles['active'] : ''}`}><span
                            className="material-symbols-outlined">toys</span></li>
                        <div className={`${styles["connector"]} ${estagio >= 5 ? styles['active'] : ''}`}></div>
                        <li className={`${estagio >= 5 ? styles['active'] : ''}`}><span
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
                        <EscolhaGenero setGenero={setGenero} genero={genero}></EscolhaGenero>
                    </>

                }
                {
                    estagio === 1 &&
                    <>
                        <div className={styles["text-info"]}>
                            <h2>Para qual faixa-etária a caixa será montada:</h2>
                        </div>
                        <EscolhaIdade setFaixa={setFaixa} faixa={faixa}></EscolhaIdade>
                    </>
                }
                {
                    estagio >= 2 && estagio <= 4 &&
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
                    estagio === 5 &&
                    <>
                        <Cartinha setCarta={setCarta} carta={carta} setFoto={setFoto} foto={foto}></Cartinha>
                    </>
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