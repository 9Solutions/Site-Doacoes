import styles from "./home.module.css";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <NavBar/>
            <div className={styles["div-banner"]}>
                <h3>Monte sua Caixa</h3>
                <p> É uma oportunidade única de espalhar alegria, amor e esperança para alguém que precisa</p>
            </div>
            <Footer/>
        </>
    )
}

export default Home;