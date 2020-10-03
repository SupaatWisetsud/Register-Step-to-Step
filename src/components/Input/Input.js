import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Input = ({
    placeholder,
    label,
    onTextChange,
    value,
    defaultValue,
    autoFocus = false,
    type="text",
    icon
}) => {

    const handleOnTextChange = event => {
        let text = event.target.value;
        if(onTextChange) onTextChange(text.trim())
    }
    return (
        <div className={styles.container}>
            {label && 
                <p className={styles.label}>
                    {icon && <FontAwesomeIcon icon={icon} />} {label}
                </p>
            }
            <input
                type={type}
                placeholder={placeholder}
                className={styles.input}
                onChange={handleOnTextChange}
                value={value}
                defaultValue={defaultValue}
                autoFocus={autoFocus}
            />
        </div>
    )
}

export default Input