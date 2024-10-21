import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

import styles from "./home.module.css";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import { useNavigate } from "react-router-dom";

import banner from "../../utils/img/pexels-rebecca-zaal-252062-764681 1.png";
import teste from "../../utils/img/imagem-home.jpg";
import equipe from "../../utils/img/equipe.png";
import criancas from "../../utils/img/criancas.png";
import destino from "../../utils/img/destino.png";
import familia from "../../utils/img/familia.png";
import caixa from "../../utils/img/pexels-cup-of-couple-8015700 1.png";
import facilitador from "../../utils/img/69555ee342bbe0ef1058bd96ead77ed5 2.png";
import anjo from "../../utils/img/image 83.png";
import parceiro from "../../utils/img/69555ee342bbe0ef1058bd96ead77ed5.png";
import historiasInspiradoras from "../../utils/img/imagem 1.png";
import philipsLogo from "../../utils/img/Philips.png";
import hpLogo from "../../utils/img/hp.png";
import mackenzieLogo from "../../utils/img/mackenzie.png";
import organicoLogo from "../../utils/img/organico.png";
import tquimLogo from "../../utils/img/tquim.png";
import hpeLogo from "../../utils/img/hpe.png";
import projetocaixasapatoLogo from "../../utils/img/Screen Shot 2019-01-19 at 22.49 1.png";
import whatsapp from "../../utils/img/whatsapp.png";
import qrcode from "../../utils/img/qrcode.png";
import criancas2 from "../../utils/img/kids-1093758_1280 1.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className={styles["div-banner"]}>
        <img src={teste} alt="" />
        <div className={styles["div-texto-overlay"]}>
          <h3>Monte sua Caixa</h3>
          <p>
            É uma oportunidade única de espalhar alegria, amor e esperança para
            alguém que precisa
          </p>
          <button className={styles["default-button"]} onClick={()=> navigate("montagem-caixa")}>FAÇA SUA CAIXA</button>
        </div>
      </div>
      <div className={styles["div-info-banner"]}>
        <ul>
          <li className={styles["info-banner-item"]}>
            <img src={equipe} alt="" />
            <h4>1010</h4>
            <p>Voluntários</p>
          </li>
          <li className={styles["info-banner-item"]}>
            <img src={criancas} alt="" />
            <h4>4510</h4>
            <p>Crianças</p>
          </li>
          <li className={styles["info-banner-item"]}>
            <img src={destino} alt="" />
            <h4>40+</h4>
            <p>Destinos</p>
          </li>
          <li className={styles["info-banner-item"]}>
            <img src={familia} alt="" />
            <h4>2210</h4>
            <p>Famílias</p>
          </li>
        </ul>
      </div>
      <div className={styles["div-nav-cards"]}>
        <ul>
          <li>
            <img src={caixa} alt="" />
            <h5>Monte uma caixinha rapidamente</h5>
            <p>
              Você pode montar sua caixinha e escrever sua cartinha, tudo
              online!!
            </p>
            <button className={styles["default-button"]} onClick={()=> navigate("montagem-caixa")}>MONTAR CAIXA</button>
          </li>

          <li>
            <img src={facilitador} alt="" />
            <h5>Seja um facilitador local do projeto</h5>
            <p>
              Seja representante do nosso projeto na nossa escola, igreja, ou
              empresa. 
            </p>
            <button className={styles["default-button"]}>
              SER UM FACILITADOR
            </button>
          </li>

          <li>
            <img src={anjo} alt="" />
            <h5>Seja um Anjo!</h5>
            <p>
              Ideal para pessoas física, é acreditar e inspirar a vida de
              milhares de crianças!
            </p>
            <button className={styles["default-button"]}>SER UM ANJO</button>
          </li>

          <li>
            <img src={parceiro} alt="" />
            <h5>Seja um Parceiro!</h5>
            <p>
              Ideal para pessoa jurídica, é investir e impactar a vida de
              milhares de crianças
            </p>
            <button className={styles["default-button"]}>
              SER UM PARCEIRO
            </button>
          </li>
        </ul>
      </div>
      <div className={styles["div-video"]}>
        <iframe
          width="560"
          height="315"
          src="https://youtube.com/embed/nMuqIiT6kM8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <button className={styles["default-button"]}>SAIBA MAIS</button>
      </div>
      <div className={styles["div-historias-inspiradoras"]}>
        <div className={styles["header-historias-inspiradoras"]}>
          <div className={styles["texto-overlay-historias-inspiradoras"]}>
            <h3>Conheça o impacto do nosso projeto</h3>
            <button className={styles["default-button"]}>
              HISTÓRIAS INSPIRADORAS
            </button>
          </div>
        </div>
        <div className={styles["cards-historias-inspiradoras"]}>
          <div
            className={styles["card-1-historias-inspiradoras"]}
          >
            <h3>Sobre nós</h3>
          </div>
          <div
            className={styles["card-2-historias-inspiradoras"]}
          >
            <h3>Doe</h3>
          </div>
          <div
            className={styles["card-3-historias-inspiradoras"]}
          >
            <h3>Campanha Ilha de Marajó</h3>
          </div>
        </div>
      </div>
      <div className={styles["div-equipe-voluntariado"]}>
        <h3>EQUIPES DE VOLUNTARIADO E LOGÍSTICA:</h3>
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          autoplay={{ delay: 3000 }} 
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide><img src={philipsLogo} alt="Philips" /></SwiperSlide>
          <SwiperSlide><img src={hpLogo} alt="HP" /></SwiperSlide>
          <SwiperSlide><img src={mackenzieLogo} alt="Mackenzie" /></SwiperSlide>
          <SwiperSlide><img src={organicoLogo} alt="Orgânico" /></SwiperSlide>
          <SwiperSlide><img src={tquimLogo} alt="TQUIM" /></SwiperSlide>
          <SwiperSlide><img src={hpeLogo} alt="Hewlett Packard Enterprise" /></SwiperSlide>
          <SwiperSlide><img src={projetocaixasapatoLogo} alt="Projeto Caixa de Sapato" /></SwiperSlide>
        </Swiper>
      </div>
      <div className={styles["div-contato"]}>
        <div className={styles["div-contato-qrcode"]}>
          <h4>Contate-nos</h4>
          <p>
            Preencha suas informações e entre em contato conosco! Ou clique no
            ícone do whatsapp ou escaneie o QR code para entrar em contato
            rapidamente!
          </p>
          <img src={whatsapp} alt="" />
          <img src={qrcode} alt="" />
        </div>
        <div className={styles["div-contato-forms"]}>
          <img src={criancas2} alt="" />
          <input type="text" placeholder="Nome:" />
          <input type="text" placeholder="Email:" />
          <input type="text" placeholder="Mensagem:" />
          <button className={styles["default-button"]}>ENVIAR</button>
        </div>
      </div>

      
      <Footer />
    </>
  );
};

export default Home;
