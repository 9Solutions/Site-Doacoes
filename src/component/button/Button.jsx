import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, onClick, className, disabled, style = {} }) => {
    return (
        <button className={`${styles['button']} ${className}`} onClick={onClick} style={style} disabled={disabled}>{title}</button>
    );
}

export default Button;