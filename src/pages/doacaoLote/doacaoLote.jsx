import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api";
import styles from "./doacaoLote.module.css";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import caixaCarrinho from "../../img/carrinho.png";
import profile from "../../img/profile.png";

const validar = async (email, senha) => {
    if (email.length === 0 || senha.length === 0) return;
    return api.post(`/doadores/login`, { email: email, senha: senha });
};

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const senhaRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null); // Adiciona uma referência para o input de arquivos

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

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click(); // Aciona o clique no input de arquivos
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

                        <div className={styles["caixa-carrinho"]}>
                            <img src={caixaCarrinho} alt="" />
                            <p>Parabéns! Você fará muitas crianças felizes com  X <br></br> quantidade de caixas de sapato possíveis.</p>
                        </div>
                    </div>

                    <div className={styles["lado-direito"]}>
                        <p>Insira sua foto aqui</p>
                        <button 
                            type="button" 
                            onClick={triggerFileInput} 
                            className={styles["file-button"]}
                        >
                            Selecionar Imagem
                        </button>
                        <input 
                            type="file" 
                            ref={fileInputRef} // Referência ao input de arquivos
                            accept="image/*" 
                            onChange={handleImageUpload} 
                            style={{ display: 'none' }} // Oculta o input de arquivos
                        />
                        <br></br>
                        {imagePreview && (
                            <img 
                                id="preview" 
                                src={imagePreview} 
                                alt="Pré-visualização da imagem" 
                                className={styles["image-preview"]}
                            />
                        )}

                        <h2>Resultado: </h2>
                        <p>Preço Total: R$</p>
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
