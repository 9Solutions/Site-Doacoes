import styles from "./home.module.css";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import { useNavigate } from "react-router-dom";
import banner from "../../utils/img/pexels-rebecca-zaal-252062-764681 1.png";
import equipe from "../../utils/img/equipe.png";
import criancas from "../../utils/img/criancas.png";
import destino from "../../utils/img/destino.png";
import familia from "../../utils/img/familia.png";
import caixa from "../../utils/img/pexels-cup-of-couple-8015700 1.png";
import facilitador from "../../utils/img/69555ee342bbe0ef1058bd96ead77ed5 2.png";
import anjo from "../../utils/img/image 83.png";
import parceiro from "../../utils/img/69555ee342bbe0ef1058bd96ead77ed5.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className={styles["div-banner"]}>
        <img src={banner} alt="" />
        <div className={styles["div-texto-overlay"]}>
          <h3>Monte sua Caixa</h3>
          <p>
            É uma oportunidade única de espalhar alegria, amor e esperança para
            alguém que precisa
          </p>
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
            <button>MONTAR CAIXA</button>
          </li>

          <li>
            <img src={facilitador} alt="" />
            <h5>Seja um facilitador local do projeto</h5>
            <p>
              Seja representante do nosso projeto na nossa escola, igreja, ou
              empresa. 
            </p>
            <button>SER UM FACILITADOR</button>
          </li>

          <li>
            <img src={anjo} alt="" />
            <h5>Seja um Anjo!</h5>
            <p>
              Ideal para pessoas física, é acreditar e inspirar a vida de
              milhares de crianças!
            </p>
            <button>SER UM ANJO</button>
          </li>

          <li>
            <img src={parceiro} alt="" />
            <h5>Seja um Parceiro!</h5>
            <p>
              Ideal para pessoa jurídica, é investir e 
              impactar a vida de milhares de crianças
            </p>
            <button>SER UM PARCEIRO</button>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Home;
