import React, { useState, useRef, useEffect } from "react";
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
import caixaAnimada from '../../img/caixaAnimation.gif'
import caixaAnimada2 from '../../img/caixaAnimada2.gif'
import check from '../../img/check.gif'

const validar = async (email, senha) => {
  if (email.length === 0 || senha.length === 0) return;
  return api.post(`/doadores/login`, { email: email, senha: senha });
};

const Pagamento = () => {
  const [activeTab, setActiveTab] = useState('Dados'); // Define 'Dados' como valor padrão
  const [showLabel, setShowLabel] = useState({ cartao: false, boleto: false, pix: false });
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

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (valor) => {
    setSelectedOption(valor);
  };

  const handleClickPagamento = (method) => {
    setActiveTab('Pagamento'); 
    if (method === 'cartao') {
      setShowLabel({ cartao: true, boleto: false, pix: false });
    } else if (method === 'boleto') {
      setShowLabel({ cartao: false, boleto: true, pix: false });
    } else if (method === 'pix') {
      setShowLabel({ cartao: false, boleto: false, pix: true });
    } else {
      setShowLabel({ cartao: false, boleto: false, pix: false });
    }
  };

  const handleNavigationClick = (tab) => {
    setActiveTab(tab); 
  };

  const handleNextStep = () => {
    setActiveTab('Pagamento');
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
          <p
            onClick={() => handleNavigationClick('Dados')}
            className={activeTab === 'Dados' ? styles["active-tab"] : ""}
          >
            Dados
          </p>       
          <p
            onClick={() => handleNavigationClick('Pagamento')}
            className={activeTab === 'Pagamento' ? styles["active-tab"] : ""}
          >
            Pagamento
          </p>
          <p
            onClick={() => handleNavigationClick('Finalização')}
            className={activeTab === 'Finalização' ? styles["active-tab"] : ""}
          >
            Finalização
          </p>
        </div>
        <hr />

        {/* Conteúdo da aba "Dados" */}
        {activeTab === 'Dados' && (
          <div className={styles["container-dados"]}>
            <h1>Informe seus dados: </h1>

            <div className={styles["form-section"]}>
              <div className={styles["input-group-left"]}>
                <label className={styles["label-pagamento"]} htmlFor="nome">
                  Nome Completo:
                </label><br></br>
                <input type="text" placeholder="Fulano da Silva" id="nome" /><br></br>

                <label className={styles["label-pagamento"]} htmlFor="cpf">
                  CPF:
                </label><br></br>
                <input type="text" placeholder="123.456.789-09" ref={emailRef} /><br></br>


                <label className={styles["label-pagamento"]} htmlFor="email">
                  Email:
                </label><br></br>
                <input type="email" placeholder = "fulano.silva@gmail.com" id="email" /><br></br>

                <label className={styles["label-pagamento"]} htmlFor="endereco">
                  Endereço:
                </label><br></br>
                <input type="text" id="endereco" /><br></br>
              </div>

              <div className={styles["input-group-right"]}>
                <label className={styles["label-pagamento"]} htmlFor="tipo-pessoa">
                  Tipo de Pessoa:
                </label><br></br>
                <select id="tipo-pessoa">
                  <option value="fisica">Pessoa Física</option>
                  <option value="juridica">Pessoa Jurídica</option>
                </select><br></br>

                <label className={styles["label-pagamento"]} htmlFor="telefone">
                  Telefone:
                </label><br></br>
                <input type="text" placeholder = "(11) 11111-1111" id="telefone" /><br></br>

                <label className={styles["label-pagamento"]} htmlFor="conheceu-projeto">
                  Como conheceu o projeto?
                </label><br></br>
                <input type="text" id="conheceu-projeto" /><br></br>
              </div>
            </div>

            <div className={styles["buttons"]}>
              <button className={styles["next-button"]} onClick={handleNextStep}>
                Avançar
              </button>
            </div>
          </div>
        )}

        {/* Conteúdo da aba "Pagamento" */}
        {activeTab === 'Pagamento' && (
          <div className={styles["container-top"]}>
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
              <div className={styles["caixa"]}>
                <div className={styles["div-pagamento-caixa"]}>
                  <img src={caixa} alt="Caixa" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Pagamento' && (
          <div className={styles["container-valores-inputs"]}>
            <div className={styles["valores"]}>
              <p>Valor Total:</p>
              <p>Qtde. de Itens:</p>
            </div>

            <div className={styles["inputs-valores"]}>
              {showLabel.cartao && (
                <div className={styles["inputs-credit"]}>
                  <label className={styles["label-pagamento"]} htmlFor="identificador">
                    Número do Cartão:
                  </label>
                  <input type="text" placeholder="0000 0000 0000 0000" ref={emailRef} />
                  <label className={styles["label-pagamento"]} htmlFor="parcelas">
                    Parcelas:
                  </label>
                  <select name="parcelas" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <label className={styles["label-pagamento"]} htmlFor="validade">
                    Validade:
                  </label>
                  <input type="text" placeholder="MM/AA" ref={emailRef} />
                  <label className={styles["label-pagamento"]} htmlFor="codigo">
                    Código de Segurança:
                  </label>
                  <input type="text" placeholder="CVV" ref={emailRef} />
                  <label className={styles["label-pagamento"]} htmlFor="numero-impresso">
                    Número Impresso:
                  </label>
                  <input type="text" placeholder="0000 0000 0000 0000" ref={emailRef} />
                  <label className={styles["label-pagamento"]} htmlFor="cpf-titular">
                    CPF do Titular:
                  </label>
                  <input type="text" placeholder="123.456.789-09" ref={emailRef} />
                </div>
              )}

              {/* Input para Boleto */}
              {showLabel.boleto && (
                <div className={styles["inputs-boleto"]}>
                  <p>
                    O boleto será enviado via email. Complete o pagamento até 10/04/2024. <br></br>
                    Após o pagamento o status do pedido será atualizado em até X dias úteis.
                  </p>
                  <label className={styles["label-pagamento"]} htmlFor="identificador">
                    Confirme seu email:
                  </label><br></br>
                  <input type="text" placeholder="fulano.silva@gmail.com" ref={emailRef} />
                  <button className={styles["ok-button"]}>OK</button>
                  <a>Não recebi meu email</a>
                </div>
              )}

              {/* Input para PIX */}
              {showLabel.pix && (
                <div className={styles["inputs-pix"]}>
                  <label className={styles["label-pagamento"]} htmlFor="pixOption">
                    QR Code ou Copia e Cola
                  </label><br></br>
                  <select
                    id="pixOption"
                    className={styles["select-pagamento"]}
                    onChange={(e) => handleSelect(e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled>Selecione opção</option>
                    <option value="pix1">QR Code</option>
                    <option value="pix2">Copia e Cola</option>
                  </select>

                  {selectedOption && (
                    <div className={styles["div-pagamento-pix"]}>
                      {selectedOption === "pix1" && (
                        <>
                          <div className={styles["div-pix-contexto"]}>
                            <img src={qrcode} alt="QR Code para pagamento" />
                            <p>
                              1. Acesse seu Internet Banking ou app de pagamentos. <br></br>
                              2. Escolha pagar via Pix. <br></br>
                              3. Escolha a opção Pagar Pix com QR Code.
                            </p>
                          </div>
                        </>
                      )}

                      {selectedOption === "pix2" && (
                        <div className={styles["div-pagamento-pix-2"]}>
                          <p>
                            1. Acesse seu Internet Banking ou app de pagamentos.<br></br>
                            2. Escolha pagar via Pix.<br></br>
                            3. Cole o seguinte código:
                          </p>
                          <input
                            type="text"
                            placeholder="00020126540014br.gov.bcb.pix0132pix_marketplace@m"
                            ref={emailRef}
                          />
                          <button className={styles["copy-button"]}>Copiar Código</button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

           {/* Conteúdo da aba "Finalização" */}
           {activeTab === 'Finalização' && (
          <div className={styles["container-finalizacao"]}>
            <center>
            <img src={check} alt="Imagem de finalização" className={styles["imagem-finalizacao"]} />
            <h1 id="P1">Ficamos super felizes com a sua contribuição!</h1>
            <p>Que tal acompanhar o status da sua doação?</p>
            </center>


            <div className={styles["buttons"]}>
              <button className={styles["accompany-button"]} onClick={handleNextStep}>
                Acompanhar
              </button>
            </div>
          </div>
          
        )}

        {activeTab === 'Pagamento' && (
          <div className={styles["buttons"]}>
            <button className={styles["cancel-button"]}>Cancelar</button>
            <button className={styles["confirm-button"]}>Confirmar</button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Pagamento;
