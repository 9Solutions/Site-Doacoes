import api from "../../api";
import React, { useRef } from "react";
import styles from "./doacaoLote.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import instagramIcon from "../../utils/img/Instagram-Icon.png";
import facebookIcon from "../../utils/img/Facebook-Icon.png";
import caixaCarrinho from "../../img/carrinho.png";
import profile from "../../img/profile.png";
import { toast } from "react-toastify";

const validar = async (email, senha) => {
    if (email.length === 0 || senha.length === 0) return;
    return api.post(`/doadores/login`, { email: email, senha: senha });
};

const Login = () => {
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

                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                toast.error("Email ou Senha Inválidos!");
            });
    };

    const toCadastro = () => {
        navigate("/cadastro");
    };

    return (
        <>
            <NavBar />
            <h2 className={styles["titulo-lote"]}>Doações em Lote</h2>
            <div className={styles["div-lote"]}>
                <div className={styles["container-esq-dir"]}>
                    <div className={styles["lado-esquerdo"]}>
                        <label className={styles["label-lote"]} htmlFor="identificador">
                            Insira o valor que será doado:
                        </label><br></br>
                        <input type="text" placeholder="R$1000" /><br></br>
                        <label className={styles["label-lote"]}>
                            Escreva uma cartinha para as crianças: <br></br>
                        </label>

                        <input type="text" className={styles["cartinha"]} /><br></br>

                        <div>
                            <img src={caixaCarrinho} alt="" />
                            <p>Parabéns! Você fará muitas crianças felizes com  X <br></br> quantidade de caixas de sapato possíveis.</p>
                        </div>
                    </div>

                    <div className={styles["lado-direito"]}>
                        <img src={profile} alt="" />
                    </div>
                </div>
                <button className={styles["login-button"]} onClick={handleLogin}>
                    Avançar
                </button>

            </div>
            <Footer />
        </>
    );
};

export default Login;
