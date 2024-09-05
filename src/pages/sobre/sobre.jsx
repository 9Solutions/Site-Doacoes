import { useNavigate } from "react-router-dom";
import styles from "./sobre.module.css";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import olho from "../../utils/img/olho 1.png";
import proposito from "../../utils/img/proposito 2.png";
import Card from "../../component/card/card";
import mochilaIcon from "../../utils/img/o-saco-da-escola (1) 1.png";
import escovaIcon from "../../utils/img/escovar 1.png";
import brinquedosIcon from "../../utils/img/brinquedos (1) 1.png";
import roupasIcon from "../../utils/img/doacao-de-roupas 1.png";
import graficos from "../../utils/img/Design sem nome 1.png";
import ods1Image from "../../utils/img/ods-1.svg";
import ods4Image from "../../utils/img/ods-4.svg";
import ods10Image from "../../utils/img/ods-10.svg";
import ods12Image from "../../utils/img/ods-12.svg";
import ods17Image from "../../utils/img/ods-17.svg";

const Sobre = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className={styles["div-sobre-nos-banner"]}>
        <div className={styles["div-sobre-nos-left-banner"]}>
          <h2>Sobre nós</h2>
          <p>
            Mobilizamos pessoas de todas as idades, em escolas, igrejas e
            empresas a montarem “Caixas de Sapato” recheadas de itens e
            presentes que as crianças necessitam.
          </p>
          <p>
            Caixas de Sapato tem tamanho padrão, mas podem conter conteúdo
            diferente, assim como cada criança é especial e única.
          </p>
        </div>
        <div className={styles["div-sobre-nos-right-banner"]}>
          <iframe
            width="560"
            height="315"
            src="https://youtube.com/embed/U7wbXL9ngBE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className={styles["div-valores"]}>
        <div className={styles["div-valores-cards"]}>
          <div className={styles["div-valores-card"]}>
            <div className={styles["div-valores-card-title"]}>
              <img src={proposito} alt="" />
              <h4>PROPÓSITO</h4>
            </div>
            <p>
              Construir uma nova cultura nas famílias e organizações do Brasil,
              ensinando a crianças e adultos sobre a alegria de doar, a
              satisfação de empreender e compartilhar um gesto de Amor e
              Esperança
            </p>
          </div>
          <div className={styles["div-valores-card"]}>
            <div className={styles["div-valores-card-title"]}>
              <img src={olho} alt="" />
              <h4>VISÃO</h4>
            </div>
            <p>
              Ajudar o máximo de crianças carentes e suas famílias no Brasil e
              região, em suas necessidades físicas, emocionais e espirituais das
              crianças efamílias.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["div-impacto-social"]}>
        <h4>IMPACTO SOCIAL ( ESG ) </h4>
        <ul className={styles["list-impacto-social"]}>
          <Card
            img={mochilaIcon}
            title="4000"
            content="Kits escolares distribuídos"
          />
          <Card
            img={escovaIcon}
            title="4000"
            content="Kits escolares distribuídos"
          />
          <Card
            img={brinquedosIcon}
            title="4000"
            content="Kits escolares distribuídos"
          />
          <Card
            img={roupasIcon}
            title="4000"
            content="Kits escolares distribuídos"
          />
        </ul>
      </div>
      <div className={styles["div-acoes-pelo-brasil"]}>
        <h4>Ações pelo Brasil</h4>
        <img src={graficos} alt="" />
      </div>
      <div className={styles["div-ods"]}>
        <h4>Atendemos 5 ODS</h4>
        <div className={styles["div-ods-imgs"]}>
          <img src={ods1Image} alt="" />
          <img src={ods4Image} alt="" />
          <img src={ods10Image} alt="" />
          <img src={ods12Image} alt="" />
          <img src={ods17Image} alt="" />
        </div>
      </div>
      <div className={styles["div-projeto-caixa-sapato"]}></div>
      <div className={styles["div-equipe-voluntariado"]}></div>
      <div className={styles["div-voluntariado"]}></div>
      <div className={styles["div-premiacoes"]}></div>
      <div className={styles["div-video-banner"]}></div>
      <Footer />
    </>
  );
};

export default Sobre;
