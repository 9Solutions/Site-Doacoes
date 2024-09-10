import React from 'react';
import NavBar from "../../../component/navbar/navbar";
import Footer from "../../../component/footer/footer";
import styles from './sejaUmAnjo.module.css'; 
// import caixaIcon from "../../../img/caixa-icon.png"; 
// import voluntarioIcon from "../../../img/voluntario-icon.png"; 
// import qrCode from "../../../img/qrcode.png"; 
// import anjoIcon from "../../../img/anjo-icon.png"; 

function SejaUmAnjo() {
    return (
        <>
            <NavBar />
            <div className={styles['caixa-content']}>

                <section className={styles['banner-section']}>
                    <h1>Seja um anjo</h1>
                    <p>Ajude a transformar a vida de uma criança através do seu gesto de carinho.</p>
                    {/* <img src={anjoIcon} alt="Seja um Anjo" className={styles['anjo-icon']} /> */}
                </section>

                <section className={styles['explicacao-section']}>
                    <div className={styles['explicacao-text']}>
                        <h2>Conheça o projeto</h2>
                        <p>
                            O projeto busca proporcionar um Natal inesquecível para crianças carentes de várias regiões do Brasil. Com sua doação, podemos fazer a diferença na vida dessas crianças.
                        </p>
                    </div>
                    {/* {/* <img src={voluntarioIcon} alt="Voluntário" className={styles['voluntario-img']} /> */} /
                </section>

                <section className={styles['cta-section']}>
                    <h2>SEJA VOCÊ TAMBÉM UM ANJO!</h2>
                    <p>
                        De 2019 a 2023, arrecadamos mais de <b>5.000 caixas de sapatos</b> para crianças de regiões carentes! Junte-se a nós e contribua para essa causa!
                    </p>
                    <div className={styles['icons-container']}>
                        <div className={styles['icon-box']}>
                            {/* <img src={caixaIcon} alt="Caixa" /> */}
                            <p>Seja um dos nossos anjos!</p>
                        </div>
                        <div className={styles['icon-box']}>
                            {/* <img src={caixaIcon} alt="Caixa 2" /> */}
                            <p>Faça sua doação agora!</p>
                        </div>
                    </div>
                </section>

                <section className={styles['qr-section']}>
                    <h3>É fácil e simples: ajude com PIX!</h3>
                    {/* <img src={qrCode} alt="QR Code" className={styles['qr-code']} /> */}
                    <p>Use seu aplicativo bancário para escanear o código QR e faça sua doação</p>
                </section>

                <section className={styles['participe-section']}>
                    <h2>PARTICIPE!</h2>
                    <p>Acompanhe nosso trabalho e veja como sua ajuda transforma vidas.</p>
                    {/* <img src={voluntarioIcon} alt="Participe" className={styles['participe-img']} /> */}
                </section>

                <Footer />
            </div>
        </>
    );
}

export default SejaUmAnjo;
