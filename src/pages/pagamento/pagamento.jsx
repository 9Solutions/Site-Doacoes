import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../pagamento/pagamento.module.css";
import api from "../../api";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import pix from '../../img/pix.png';
import cartaodecredito from '../../img/cartao-de-credito.png';
import codigobarras from '../../img/codigo-de-barras.png';
import caixa from '../../img/caixa.png';
import qrcode from '../../img/qrcode.png';
import { toast } from "react-toastify";


// Função de validação
const validar = async (email, senha) => {
  if (email.length === 0 || senha.length === 0) return;
  return api.post(`/doadores/login`, { email: email, senha: senha });
};

const Pagamento = () => {
  const [showLabel, setShowLabel] = useState({ cartao: false, boleto: false, pix: false }); // Gerencia o estado
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const senhaRef = useRef(null);

  const handleLogin = async () => {
    const email = emailRef.current.value;
    const senha = senhaRef.current.value;

    validar(email, senha)
      .then((response) => {
        if (response.status !== 200) {
          toast.error("Email ou Senha Inválidos!");
          return;
        }

        navigate("");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Email ou Senha Inválidos!");
      });
  };

  const handleClickPagamento = (method) => {
    if (method === 'cartao') {
      setShowLabel({ cartao: true, boleto: false, pix: false }); // Mostra os inputs do cartão
    } else if (method === 'boleto') {
      setShowLabel({ cartao: false, boleto: true, pix: false }); // Mostra o input de E-mail/CPF para boleto
    } else if (method === 'pix') {
      setShowLabel({ cartao: false, boleto: false, pix: true }); // Mostra o select para PIX
    } else {
      setShowLabel({ cartao: false, boleto: false, pix: false }); // Reseta os inputs
    }
  };

  return (
    <>
      <NavBar />
      <h2 className={styles["titulo-pagamento"]}>Caixa Online</h2>
      <h6 className={styles["label-pagamento-2"]}>
        Inclui: R$63,00 de Itens da Caixinha + R$15,00 de <br /> processamento e envio.
      </h6>
      <div className={styles["div-pagamento"]}>
        <div className={styles["barra"]}>
          <p>Dados</p>
          <p>Pagamento</p>
          <p>Finalização</p>
        </div>
        <hr />
        <div className={styles["caixa"]}>
          <div className={styles["div-pagamento-caixa"]}>
            <img src={caixa} alt="Caixa" />
          </div>
        </div>

        <div className={styles["container-pagamentos"]}>
          <div
            className={styles["div-pagamento-2"]}
            onClick={() => handleClickPagamento('cartao')}
          >
            <img src={cartaodecredito} alt="Logo cartao de credito" />
            <p>Cartão de Crédito</p>
          </div>
          <div
            className={styles["div-pagamento-2"]}
            onClick={() => handleClickPagamento('boleto')}
          >
            <img src={codigobarras} alt="Logo codigo de barras" />
            <p>Boleto</p>
          </div>
          <div
            className={styles["div-pagamento-2"]}
            onClick={() => handleClickPagamento('pix')}
          >
            <img src={pix} alt="Logo PIX" />
            <p>PIX</p>
          </div>
        </div>

        <div className={styles["inputs-valores"]}>

        </div>
        
        <div className={styles["valores"]}>
          <p>Valor Total:</p>
          <p>Qtde. de Itens:</p>
        </div>

        {/* Inputs para Cartão de Crédito */}
        {showLabel.cartao && (
          <div className={styles["inputs-credit"]}>
            <label className={styles["label-pagamento"]} htmlFor="identificador">
              Número do Cartão: 
            </label>
            <input type="text" ref={emailRef} />
            
            <label className={styles["label-pagamento"]} htmlFor="parcelas">
              Parcelas:
            </label>
            <input type="text" ref={senhaRef} />

            <label className={styles["label-pagamento"]} htmlFor="validade">
              Validade: 
            </label>
            <input type="text" ref={emailRef} />

            <label className={styles["label-pagamento"]} htmlFor="codigo-seguranca">
              Código de Segurança: 
            </label>
            <input type="text" ref={emailRef} />

            <label className={styles["label-pagamento"]} htmlFor="numero-impresso">
              Número impresso do cartão: 
            </label>
            <input type="text" ref={emailRef} />

            <label className={styles["label-pagamento"]} htmlFor="cpf-titular">
              CPF do titular: 
            </label>
            <input type="text" ref={emailRef} />
          </div>
        )}

        {/* Input para Boleto */}
        {showLabel.boleto && (
          <div className={styles["inputs-boleto"]}>
            <p>O boleto será enviado via email. Complete o pagamento até 10/04/2024. <br></br>
              Após o pagamento o status do pedido será atualizado em até X dias úteis. </p>
            <label className={styles["label-pagamento"]} htmlFor="identificador">
              Confirme seu email:
            </label><br></br>
            <input type="text" ref={emailRef} />
             <button className={styles["ok-button"]}>OK</button>
              <a>Não recebi meu email</a> 
          </div>
        )}

        {/* Select para PIX */}
        {showLabel.pix && (
          <div className={styles["inputs-pix"]}>
            <label className={styles["label-pagamento"]} htmlFor="pixOption">
              QR Code ou Copia e Cola 
            </label><br></br>
            <select id="pixOption" className={styles["select-pagamento"]}>
              <option value="pix1">QR Code</option>
              <option value="pix2">Copia e Cola</option>
            </select>
            <div className={styles["div-pagamento-pix"]}>
            <img src={qrcode} alt="Logo cartao de credito" />
            <p>1. Acesse seu Internet Banking ou app de pagamentos. <br></br>
            2.Escolha a pagar via Pix <br></br>
            3. Escolha a opção Pagar Pix com QR Code</p>
          </div>
          </div>

          

        )}

        <div className={styles["buttons"]}>
          <button className={styles["cancel-button"]} onClick={handleLogin}>
            Cancelar
          </button>
          <button className={styles["confirm-button"]} onClick={handleLogin}>
            Confirmar
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pagamento;
