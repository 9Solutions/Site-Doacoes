import React, { useEffect, useState } from 'react';
import NavBar from "../../component/navbar/navbar";
import styles from './cartinha.module.css';
import { fileToBase64 } from '../../utils/backend/globals';

function Cartinha({setCarta, carta, setFoto, foto}) {

    function handleChange(e) {
        setFoto(URL.createObjectURL(e.target.files[0]));
        tratarImagem(e.target.files[0])
    }

    async function tratarImagem(file) {
        try {
            const base64 = await fileToBase64(file)
            sessionStorage.setItem('foto', base64)
        } catch (error) {
            console.log(`Erro ao tentar converter imagem: ${error}`)
        }
    }

    // eslint-disable-next-line
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);
    }, [isActive]);

    return (
        <>
            <NavBar />
            <div className={styles['cartinha-content']}>
                <div className={styles['card-section']}>
                    <h2>Faça sua cartinha:</h2>
                    <p>Um pedido especial para encher de esperança e alegria o coração de uma criança. Descreva com carinho sua mensagem e escolha a foto que acompanhará sua cartinha:</p>

                    <div className={styles['content-row']}>
                        <label className={styles['upload-photo']} for={'selecao-arquivo'}>
                            <div className={styles['photo-placeholder']}>
                                <img src={foto} alt="Foto da pessoa doadora"/>
                            </div>
                            <input id={"selecao-arquivo"} type="file" onChange={handleChange} />
                        </label>

                        <div className={styles['textarea-container']}>
                            <label htmlFor="cartinha-textarea" className={styles['textarea-label']}>Sua carta:</label>
                            <textarea id="cartinha-textarea" placeholder="Escreva sua carta aqui..." value={carta}
                                      onChange={(e) => {
                                        setCarta(e.target.value)
                                        sessionStorage.setItem('carta', e.target.value)
                                        }}></textarea>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Cartinha;