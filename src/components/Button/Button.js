import React from 'react';
import styles from './style.module.css';

const Button = ({
    children,
    onClick,
    disabled = false,
    color = "primary",
    outline=false
}) => {

    
    return (
        <button
            style={
                !disabled ?
                outline ? 
                colorThemeOutline[color] ?? null:
                colorTheme[color] ?? null
                :null
            }
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

const colorTheme = {
    primary: {
        backgroundColor: "#85C1E9",
        color: "white"
    },
    secondary: {
        backgroundColor: "#E5E7E9",
        color: "white"
    },
    success: {
        backgroundColor: "#85C1E9",
        color: "#616161"
    },
    danger: {
        backgroundColor: "#F1948A",
        color: "white"
    },
    warning: {
        backgroundColor: "#F7DC6F",
        color: "#616161"
    },
    info: {
        backgroundColor: "#D4E6F1",
        color: "white"
    }
}

const colorThemeOutline = {
    primary: {
        backgroundColor: "transparent",
        color: "#85C1E9"
    },
    secondary: {
        backgroundColor: "transparent",
        color: "#E5E7E9"
    },
    success: {
        backgroundColor: "transparent",
        color: "#85C1E9"
    },
    danger: {
        backgroundColor: "transparent",
        color: "#F1948A"
    },
    warning: {
        backgroundColor: "transparent",
        color: "#F7DC6F"
    },
    info: {
        backgroundColor: "transparent",
        color: "#D4E6F1"
    }
}
export default Button;