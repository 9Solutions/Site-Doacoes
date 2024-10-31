import React, { useEffect, useState } from "react";
import style from "./Carrinho.module.css";
import Navbar from "../../component/navbar/navbar";
import PageTitle from "../../component/pageTitle/PageTitle";
import caixa from "../../img/caixa.png";
import styles from "../fluxoMontagemCaixa/FluxoMontagemCaixa.module.css";
import Footer from "../../component/footer/footer";
import {useNavigate} from "react-router-dom";
import { getFaixasEtarias, postCaixa, postImage, postPedido } from "../../utils/backend/methods";
import dayjs from "dayjs";

const Carrinho = () => {
    const navigate = useNavigate();

    const VALOR_CAIXA = 78.99
    const [quantidadeCaixas, setQuantidadeCaixas] = useState(1)
    const [faixa, setFaixa] = useState(null)
    const [genero, setGenero] = useState('')

    useEffect(() => {
        async function fetchData() {
            let faixaSession = sessionStorage.getItem('faixa')
            try{
                const response = await getFaixasEtarias(faixaSession)
                console.log(response.data.faixaNome)
                setFaixa(response.data.faixaNome)
            } catch (error) {
                console.log(`Erro ao buscar faixa-etaria: ${error}`)
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        setGenero(
            sessionStorage.getItem('genero') === 'F' ?
                'Menina' : 'Menino'
        )
    }, [genero])

    const addBox = () => {
        setQuantidadeCaixas(quantidadeCaixas + 1)
    }

    const removeBox = () => {
        if (quantidadeCaixas - 1 === 0) {
            return;
        }
        setQuantidadeCaixas(quantidadeCaixas - 1)
    }

    const cadastrarPedido = async () => {
        let auth = JSON.parse(sessionStorage.getItem('auth'))
        try {
            const response = await postPedido({
                "valorTotal": Number.parseFloat((VALOR_CAIXA * quantidadeCaixas).toFixed(2)),
                "statusPedido": 1,
                "idDoador": auth.doadorId
            }) 

            if (response.status === 200) {
                const image = await sendImage()
                for(let i = quantidadeCaixas; i > 0; i--) {
                    await cadastrarCaixa(response.data.id, image)
                }
                navigate("/pagamento")
            } else {
                console.log(response)
            }

        } catch (error) {
            console.error(`Erro ao enviar pedido: ${error}`)
        }
    }
    
    const cadastrarCaixa = async (idPedido, urlImage) => {
       
        try {
            const itens = JSON.parse(sessionStorage.getItem('produtos_selecionados'))
            const idItens = itens.map(i => i.idProduto)

            const response = await postCaixa({ 
                "genero": sessionStorage.getItem('genero'),
                "carta": sessionStorage.getItem('carta'),
                "url": urlImage,
                "quantidade": 1,
                "dataCriacao": dayjs().format('YYYY-MM-DD'),
                "idFaixaEtaria": sessionStorage.getItem('faixa'),
                "itensCaixa": idItens,
                "idPedido": idPedido
            })

            if(response.status === 200) {
                return;
            }

        } catch (error) {
            console.log(error)
        }
        
    }

    const sendImage = async () => {
        const fotoSession = sessionStorage.getItem('foto')
        if (fotoSession !== undefined) {
            const response = await postImage({
                "content": fotoSession
            })

            console.log(response)

            if (response.status === 200) {
                return response.data.body.url
            }
        } else {
            return 'https://bucket-caixadesapato.s3.us-east-1.amazonaws.com/foto-padrao.png'
        }
    }

    return (
        <>
            <Navbar />
            <main>
                <PageTitle title="Caixa Online" />
                <h2 className={style["title"]}>Carrinho <span className="material-symbols-outlined">shopping_cart</span></h2>
                <div className={"centralize"}>
                    <div className={style["container-cart"]}>
                        <div className={style["caixa"]}>
                            <div className={style["container-caixa"]}>
                                <img src={caixa} alt={"Caixa"}/>
                                <div className={style["caixa-infos"]}>
                                    <div className={style["infos"]}>
                                        <h3>Caixa</h3>
                                        <p>Gênero: {genero}</p>
                                        <p>Idade: {faixa} </p>
                                    </div>
                                    <div className={style["caixa-buttons"]}>
                                        <span className="material-symbols-outlined" onClick={() => addBox()}>add</span>
                                        <span className="material-symbols-outlined" onClick={() => removeBox()}>remove</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style["container-valores"]}>
                                <div className={style["valores"]}>
                                    <div>
                                        <p>Quantidade: {quantidadeCaixas}</p>
                                        <p>Valor Unitário: R$ 78,99</p>
                                    </div>
                                    <p>Valor Total: R$ {(VALOR_CAIXA * quantidadeCaixas).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                        <h3>Valor Total: R$ {(VALOR_CAIXA * quantidadeCaixas).toFixed(2)}</h3>
                    </div>

                    <div className={styles["buttons"]}>
                        <button className={styles['next']} style={{width: "200px"}} onClick={() => {cadastrarPedido()}}>Pagar</button>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Carrinho;