import React from 'react';
import NavBar from "../../../component/navbar/navbar";
import Footer from "../../../component/footer/footer";
import styles from './formasDoacao.module.css';
import coraIcon from "../../../img/cora-icon.png";
import qrcodeIcon from "../../../img/qrcode-icon.png";
import bradescoIcon from "../../../img/bradesco-icon.png";
import paypalIcon from "../../../img/paypal-icon.png";
import pagseguroIcon from "../../../img/pagseguro-icon.png";
import entregaIcon from "../../../img/entrega-icon.png";
import megafoneIcon from "../../../img/megafone-icon.png";
import solidariedadeIcon from "../../../img/solidariedade-icon.png";


function Doe() {
    return (
        <>
            <NavBar />
            <div className={styles['caixa-content']}>
                <div className={styles['title-section']}>
                    <h2>Formas de doar</h2>
                    <div className={styles['underline']}></div>
                    <p>Ajude com os custos de processamento do projeto</p>
                </div>

                <div className={styles['donation-container']}>

                    {/* Cora Block */}
                    <div className={styles['donation-block']} id={styles['cora-block']}>
                        <img src={coraIcon} alt="Cora" className={styles['donation-logo']} />
                        <div className={styles['underline-block']}></div>
                        <img src={qrcodeIcon} alt="QR Code" className={styles['qr-code']} />
                        <p><b>PIX:</b> CNPJ: 36.293.262/0001-39</p>
                    </div>

                    {/* Bradesco Block */}
                    <div className={styles['donation-block']} id={styles['bradesco-block']}>
                        <img src={bradescoIcon} alt="Bradesco" className={styles['donation-logo']} />
                        <div className={styles['underline-block']}></div>
                        <b>ASSOCIAÇÃO CAIXA DE SAPATO</b>
                        <p><b>BANCO:</b> Bradesco</p>
                        <p><b>AGÊNCIA:</b> 3360-0</p>
                        <p><b>CONTA CORRENTE:</b> 113452-0</p>
                        <p><b>SWIFT CODE:</b> BBDEBRSPPO</p>
                        <button className={styles['donation-button']}>DOE AQUI</button>
                    </div>

                    <div className={styles['paypal-pagseguro']}>

                        {/* PayPal Block */}
                        <div className={styles['donation-block']} id={styles['paypal-block']}>
                            <img src={paypalIcon} alt="PayPal" className={styles['donation-logo']} />
                            <div className={styles['underline-block']}></div>
                            <button className={styles['donation-button']}>DOE AQUI</button>
                        </div>

                        {/* PagSeguro Block */}
                        <div className={styles['donation-block']} id={styles['pagseguro-block']}>
                            <img src={pagseguroIcon} alt="PagSeguro" className={styles['donation-logo']} />
                            <div className={styles['underline-block']}></div>
                            <button className={styles['donation-button']}>DOE AQUI</button>
                        </div>

                    </div>
                </div>

                <div className={styles['why-donate']}>
                    <h2>Porque doar?</h2>
                    <div className={styles['underline']}></div>
                    <div className={styles['why-donate-items']}>
                        <div className={styles['why-donate-item']}>
                            <img src={entregaIcon} alt="Icone 1" />
                            <p>Ajudar no custos de logística de envio de centenas de caixas para crianças realmente carentes nos lugares mais distantes do Brasil.  </p>
                        </div>
                        <div className={styles['why-donate-item']}>
                            <img src={megafoneIcon} alt="Icone 2" />
                            <p>Esforço de expansão do Projeto (folhetos, divulgação, processamento, etc. )  em mais escolas, empresas e organizações na região!</p>
                        </div>
                        <div className={styles['why-donate-item']}>
                            <img src={solidariedadeIcon} alt="Icone 3" />
                            <p>Juntos podemos mudar a cultura e ensinar a generosidade a nossas crianças.</p>
                        </div>
                    </div>
                </div>

                <div className={styles['video-section']}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/U7wbXL9ngBE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Doe;
