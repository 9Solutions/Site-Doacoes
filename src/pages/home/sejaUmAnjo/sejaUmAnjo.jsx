import React from 'react';
import NavBar from "../../../component/navbar/navbar";
import Footer from "../../../component/footer/footer";
import styles from './sejaUmAnjo.module.css';
import bolha1 from '../../../img/bolhas-criancas.png';
import bolha2 from '../../../img/bolhas-criancas2.png';
import goldenBox from '../../../img/box-golden-icon.png'
import silverBox from '../../../img/box-silver-icon.png'
import bronzeBox from '../../../img/box-bronze-icon.png'
import qrCode from '../../../img/qr-code-anjo.png'
import projectImage from '../../../img/project-image.png'

function SejaUmAnjo() {
    return (
        <>
            <NavBar />
            <div className={styles['caixa-content']}>
                <div className={styles['banner-container']}>
                    <div className={styles['banner-section']}>
                        <h2>Seja um anjo</h2>
                        <div className={styles['underline']}></div>
                        <div className={styles['description']}>
                            <p>Um simples ato, pode dar mais significado a vida!</p>
                        </div>
                        <button className={styles['quero-ser-anjo-button']}>QUERO SER UM ANJO</button>
                    </div>
                    <div className={styles['bolha-img']}>
                        <img src={bolha1} alt="Bolha" />
                    </div>
                </div>

                <div className={styles['banner-container']}>
                    <div className={styles['bolha-img']}>
                        <img src={bolha2} alt="Bolha 2" />
                    </div>
                    <div className={styles['banner-section']}>
                        <h2>Conheça o projeto</h2>
                        <div className={styles['underline']}></div>
                        <div className={styles['description']}>
                            <p>Você já imaginou o que em uma simples <span className={styles['caixa-highlight']}>CAIXA</span> de sapatos?</p>
                        </div>
                    </div>
                </div>

                <div className={styles['project-intro-section']}>
                    <p>O projeto consiste na mobilização de milhares de pessoas de todas as idades em todo o Brasil</p>
                    <p><span className={styles['highlight-todos']}>TODOS</span> podem montar sua “Caixa de Sapatos” recheada de itens e presentes que crianças necessitam e adoram</p>
                    <h3 className={styles['highlight-call-to-action']}>SEJA VOCÊ TAMBÉM UM <span className={styles['highlight-anjo']}>ANJO!</span></h3>
                </div>

                <div className={styles['section-caixas']}>
                    <div className={styles['caixas-content']}>
                        <p className={styles['caixas-description']}>
                            <strong>Em 2021-22 entregamos mais de <span className={styles['highlight-caixas']}>33200 caixas</span> com material escolar, itens de higiene, brinquedos, e muita ESPERANÇA!</strong>
                        </p>
                        <h3 className={styles['caixas-title']}>Seja um dos nossos anjos

                            <div className={styles['underline-custom']}></div>
                        </h3>

                        <p className={styles['caixas-subtitle']}>Escolha uma categoria:</p>
                        <div className={styles['caixas-categories']}>
                            <div className={styles['category']}>
                                <img src={goldenBox} alt="Categoria Ouro" className={styles['category-icon']} />
                                <p className={styles['category-title']} style={{ color: '#d4af37' }}>Ouro 100 reais mensais<br />= 16 Caixas por ano</p>
                            </div>
                            <div className={styles['category']}>
                                <img src={silverBox} alt="Categoria Prata" className={styles['category-icon']} />
                                <p className={styles['category-title']} style={{ color: '#c0c0c0' }}>Prata 50 reais mensais<br />= 08 Caixas por ano</p>
                            </div>
                            <div className={styles['category']}>
                                <img src={bronzeBox} alt="Categoria Bronze" className={styles['category-icon']} />
                                <p className={styles['category-title']} style={{ color: '#cd7f32' }}>Bronze 25 reais mensais<br />= 04 Caixas por ano</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles['qr-section']}>
                    <div className={styles['qr-content']}>
                        <div className={styles['qr-text']}>
                            <h3 className={styles['qr-title']}>Viu como é simples ajudar quem precisa?</h3>
                            <p className={styles['qr-subtitle']}>
                                Aponte a câmera do seu celular e faça parte deste projeto!
                            </p>
                        </div>
                        <div className={styles['qr-code-container']}>
                            <img src={qrCode} alt="QR Code" className={styles['qr-code']} />
                        </div>
                    </div>
                </div>

                <div className={styles['participate-section']}>
                    <div className={styles['text-content']}>
                        <h2 className={styles['title']}>PARTICIPE!</h2>
                        <p className={styles['subtitle']}>Faça parte desse projeto!</p>
                        <p className={styles['description-participate']}>
                        Ative a opção de "Fazer desta, uma doação mensal" Para participar deste projeto por meio de boleto bancário entre em contato com: 
                            <a href="mailto:atendimento@projetocaixadesapato.org" className={styles['email-link']}> atendimento@projetocaixadesapato.org</a>
                        </p>
                        <button className={styles['quero-ser-anjo-button']}>QUERO SER UM ANJO</button>
                    </div>

                    <div className={styles['image-section']}>
                        <img src={projectImage} alt="Projeto Caixas de Sapato" className={styles['project-image']} />
                    </div>
                </div>

                <p className={styles['thank-you-message']}>Agradecemos por fazer parte deste projeto e ser um anjo para nossas crianças!</p>

                <div className={styles['media-container']}>
                    <iframe
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={styles['youtube-player']}
                    ></iframe>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default SejaUmAnjo;
