import React, { useEffect, useState } from 'react';
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import styles from './ItensCaixa.module.css';
import openBoxIcon from "../../utils/img/open-box-icon.png";
import shirtIcon from "../../utils/img/shirt-icon.png";
import personIcon from "../../utils/img/person-icon.png";
import lolipopIcon from "../../utils/img/lolipop-icon.png";
import boxIcon from "../../utils/img/box-icon.png";
import balasIcon from "../../utils/img/balas-icon.png";
import brinquedoIcon from "../../utils/img/brinquedo-icon.png";
import camisaIcon from "../../utils/img/camisa-azul-icon.png";
import garrafinhaIcon from "../../utils/img/garrafinha-icon.png";
import kitDentalIcon from "../../utils/img/kit-dental-icon.png";
import gizIcon from "../../utils/img/giz-de-cera-icon.png";
import sandaliasIcon from "../../utils/img/sandalias-icon.png";
import toalinhasIcon from "../../utils/img/toalinhas-icon.png";
import cartIcon from "../../utils/img/cart-icon.png"

function ItensCaixa() {

    const [isActive, setIsActive] = useState(false);

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
            <div className={styles['caixa-content']}>
                <div className={`${styles['title-section']} ${isActive ? styles['active'] : ''}`}>
                    <h2>Caixa Online</h2>
                    <div className={styles['underline']}></div>
                    <p><strong>Inclui:</strong> R$63,00 de itens da Caixinha + R$15,00 de processamento e envio.</p>
                </div>

                <div className={styles['steps']}>
                    <div className={styles['step']}>
                        <img src={openBoxIcon} alt="Step 1" />
                    </div>
                    <div className={styles['line']}></div>
                    <div className={styles['step']}>
                        <img src={shirtIcon} alt="Step 2" />
                    </div>
                    <div className={styles['line']}></div>
                    <div className={styles['step']}>
                        <img src={personIcon} alt="Step 3" />
                    </div>
                    <div className={styles['line']}></div>
                    <div className={styles['step']}>
                        <img src={lolipopIcon} alt="Step 4" />
                    </div>
                    <div className={styles['line']}></div>
                    <div className={styles['step']}>
                        <img src={boxIcon} alt="Step 5" />
                    </div>
                </div>

                <h3>Itens da sua caixa - Valor final: R$ 78,00</h3>
                <div className={styles['item-container']}>

                    <div className={styles['item-list']}>
                        <div className={styles['item']}>
                            <img src={camisaIcon} alt="Camiseta Azul" className={styles['item-image']} />
                            <p>Camiseta Azul</p>
                        </div>
                        <div className={styles['item']}>
                            <img src={garrafinhaIcon} alt="Garrafinha" className={styles['item-image']} />
                            <p>Garrafinha</p>
                        </div>
                        <div className={styles['item']}>
                            <img src={balasIcon} alt="Balas" className={styles['item-image']} />
                            <p>Balas</p>
                        </div>
                        <div className={styles['item']}>
                            <img src={toalinhasIcon} alt="Toalhinhas" className={styles['item-image']} />
                            <p>Toalhinhas</p>
                        </div>
                        <div className={styles['item']}>
                            <img src={kitDentalIcon} alt="Kit Dental" className={styles['item-image']} />
                            <p>Kit Dental</p>
                        </div>
                        <div className={styles['item']}>
                            <img src={brinquedoIcon} alt="Brinquedo" className={styles['item-image']} />
                            <p>Brinquedo</p>
                        </div>
                        <div className={styles['item']}>
                            <img src={gizIcon} alt="Giz de Cera" className={styles['item-image']} />
                            <p>Giz de Cera</p>
                        </div>
                        <div className={styles['item']}>
                            <img src={sandaliasIcon} alt="Sandálias" className={styles['item-image']} />
                            <p>Sandálias</p>
                        </div>
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
                            <button className={styles['view-cart-button']}>Visualizar Carrinho</button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default ItensCaixa;
