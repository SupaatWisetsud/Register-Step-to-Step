import React from 'react';
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Select = ({
    option = [],
    defaultValue = 0,
    label,
    onSelectChange,
    value,
    icon
}) => {

    const handleOnSelectChange = (event) => {
        let {value} = event.target
        if(onSelectChange) onSelectChange(value)
    }

    return (
        <div className={styles.container}>
            {label && 
                <p className={styles.label}>
                    {icon && <FontAwesomeIcon icon={icon} />} {label}
                </p>
            }
            <select 
                defaultValue={defaultValue} 
                value={value}
                className={styles.select}
                onChange={handleOnSelectChange}
            >
                {option.map(n => <option key={n.value} value={n.value}>{n.name}</option>)}
            </select>
        </div>
    )
}

export default Select;