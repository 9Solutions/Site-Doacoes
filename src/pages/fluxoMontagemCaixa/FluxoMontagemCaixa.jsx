import React, {useEffect, useRef, useState} from "react";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/navbar/navbar";
import PageTitle from "../../component/pageTitle/PageTitle";
import styles from "./FluxoMontagemCaixa.module.css";
import {getCategoriasPorEstagio, getProdutos} from "../../utils/backend/methods";
import {toast} from "react-toastify";
import EscolhaGenero from "../../component/componentsMontagemCaixa/EscolhaGenero";
import EscolhaIdade from "../../component/componentsMontagemCaixa/EscolhaIdade";
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

    useEffect(() => {
        window.scrollTo(0, 0)
        if (estagio > 1 && estagio <= 4) {
            getCategoriasPorEstagio(estagio-1).then((response) => {
                setCategorias(response.data);
            });
        }

        if (estagio === 6) {
            sessionStorage.setItem("produtos_selecionados", JSON.stringify(produtosSelecionados));
            window.location.href = '/itens-caixa'
        }

        //eslint-disable-next-line
    }, [estagio]);

    useEffect(() => {
        produtosSelecionados.forEach((produto) => {
            let produtoElement = document.getElementById(`prod-${produto.idProduto}`);
            if (produtoElement) {
                produtoElement.classList.add(styles["selected"]);
            }
        });
    }, [produtosSelecionados, categorias]);

    useEffect(() => {
        if (faixa !== -1 && genero !== '') {
            getProdutos().then((response) => {
                let produtosFiltrados = response.data.filter(prod => prod.faixaEtaria.id === faixa);
                produtosFiltrados = produtosFiltrados.filter(produto => produto.genero === genero || produto.genero === 'U');
                setProdutos(produtosFiltrados);
                setCategorias([])
            });
            sessionStorage.setItem('genero', genero)
            sessionStorage.setItem('faixa', faixa)
        }
    }, [genero, faixa]);

    useEffect(() => {
        quantTotalEsperadaRef.current["est"+estagio] = categorias.reduce((total, categoria) => total + categoria.qtdeProdutos, 0);
    }, [estagio, categorias]);

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
        switch (estagio){
            case 0:
                return genero === '';
            case 1:
                return faixa === -1;
            case 5:
                return carta === '';
            default:
                return quantTotalEsperadaRef.current["est"+estagio] !== produtosSelecionados
                    .filter(produto => categorias.map(categoria => categoria.id).includes(produto.idCategoria))
                    .length;
        }
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