import { useNavigate } from "react-router-dom";
import styles from "./sobre.module.css";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import olho from "../../utils/img/olho 1.png";
import proposito from "../../utils/img/proposito 2.png";
import Card from "../../component/card/card";
import Premiacao from "../../component/premiacao/premiacao";

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
import dinamico from "../../utils/img/dinamica 1.png";
import oportunidade from "../../utils/img/oportunidade 1.png";
import escalabilidade from "../../utils/img/escalabilidade 2.png";
import recorrente from "../../utils/img/recorrente 1.png";
import philipsLogo from "../../utils/img/Philips.png";
import hpLogo from "../../utils/img/hp.png";
import mackenzieLogo from "../../utils/img/mackenzie.png";
import organicoLogo from "../../utils/img/organico.png";
import tquimLogo from "../../utils/img/tquim.png";
import hpeLogo from "../../utils/img/hpe.png";
import projetocaixasapatoLogo from "../../utils/img/Screen Shot 2019-01-19 at 22.49 1.png";
import criança2 from "../../utils/img/image 93.png";
import pngeIcon from "../../utils/img/image 94.png"
import ajudaiIcon from "../../utils/img/image 95.png"

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
      <div className={styles["div-projeto-caixa-sapato"]}>
        <h4>O Projeto Caixa de Sapato é:</h4>
        <ul className={styles["list-projeto-caixa-sapato"]}>
          <Card
            img={dinamico}
            title="Dinâmico"
            content="Existem uma infinidade de maneiras de mobilizar pessoas ou grupos para apoiarem o projeto. (Caixas digitais, Packing Parties, Desafios, Eventos, etc.)"
          />
          <Card
            img={oportunidade}
            title="Oportuno"
            content="Desenvolve o empreendedorismo social o Projeto Caixa de Sapato é mão na massa."
          />
          <Card
            img={escalabilidade}
            title="Escalável"
            content="Não complicamos as doações. Cada pessoa monta sua caixa como pode."
          />
          <Card
            img={recorrente}
            title="Recorrente"
            content="Todos os anos durante varias datas do ano."
          />
        </ul>
        <h4>Qual a importância de quantidade?</h4>
        <ul className={styles["list-projeto-caixa-sapato-text"]}>
          <li>
            <p>
              As principais causas de mortes de indivíduos com idade entre 10 a
              24 anos são as agressões, os suicídios e os acidentes de
              transporte (causas externas), doença mental, uso de álcool,
              desfechos relacionados à saúde materna e contraceptiva, e doenças
              infeciosas 1. Geneva: WHO; 2021 [cited 2021 Jan 28].
            </p>
          </li>
          <li>
            <p>
              O impacto de uma caixinha de sapato visa diminuir drasticamente
              estas mortes e perdas de forma efetiva e eficaz.Ajudar crianças
              com brinquedos, material escolar e itens de higiene atende suas
              necessidades básicas e tem impacto em seu bem-estar emocional,
              social, educacional e físico, proporcionando conforto imediato e
              construindo um futuro promissor e resiliente.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles["div-monte-sua-caixa"]}>
        <ul>
          <li>
            <img src={criança2} alt="" />
          </li>
          <li>
            <p>
              Uma grande oportunidade de ensinar <a>generosidade</a> para a
              próxima geração. Faça sua caixa você também clicando no botão!
            </p>
            <button>MONTAR MINHA CAIXA</button>
          </li>
        </ul>
      </div>
      <div className={styles["div-equipe-voluntariado"]}>
        <h3>EQUIPES DE VOLUNTARIADO E LOGÍSTICA:</h3>
        <div className={styles["div-equipe-voluntariado-imgs"]}>
          <img src={philipsLogo} alt="" />
          <img src={hpLogo} alt="" />
          <img src={mackenzieLogo} alt="" />
          <img
            src={organicoLogo}
            alt=""
            className={styles["voluntarios-img"]}
          />
          <img src={tquimLogo} alt="" className={styles["voluntarios-img"]} />
          <img src={hpeLogo} alt="" className={styles["voluntarios-img"]} />
          <img src={projetocaixasapatoLogo} alt="" />
        </div>
      </div>
      <div className={styles["div-voluntariado"]}>
        <h5>Voluntariado</h5>
        <p>Saiba os benefícios de ser um voluntário:</p>
        <div className={styles["div-voluntariado-cards"]}>
          <div className={styles["div-voluntariado-card"]}>
            <h4>PROPÓSITO E REALIZAÇÃO</h4>
            <p>
              O voluntariado oferece uma oportunidade única para contribuir com
              a comunidade e fazer a diferença na vida dos outros,
              proporcionando um profundo senso de propósito e realização
              pessoal.
            </p>
          </div>
          <div className={styles["div-voluntariado-card"]}>
            <h4>DESENVOLVIMENTOS DE HABILIDADES</h4>
            <p>
              Os voluntários frequentemente adquirem e aprimoram uma ampla gama
              de habilidades, desde habilidades práticas até habilidades
              interpessoais, como trabalho em equipe, comunicação e liderança.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["div-premiacoes"]}>
        <h5>Nossas premiações: </h5>
        <Premiacao
          img={pngeIcon}
          title="PNGE Premiações"
          content="O PNGE busca incentivar práticas eficazes de gestão educacional no Brasil, reconhecendo o alto desempenho das instituições de ensino e premiando ações inovadoras. Promove a divulgação de boas práticas na gestão educacional para melhorar a qualidade das instituições ensino no país."
        />

        <Premiacao
          img={ajudaiIcon}
          title="PNGE Premiações"
          content="O PNGE busca incentivar práticas eficazes de gestão educacional no Brasil, reconhecendo o alto desempenho das instituições de ensino e premiando ações inovadoras. Promove a divulgação de boas práticas na gestão educacional para melhorar a qualidade das instituições ensino no país."
        />
      </div>
      <div className={styles["div-video-banner"]}>
      <iframe
            width="560"
            height="315"
            src="https://youtube.com/embed/lD5JV4r8qmY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Sobre;
