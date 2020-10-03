import React from 'react';
import styles from './style.module.css'
import {
    Button,
    Input,
    Select
} from './components'
import { faTty, faCalendar, faGenderless } from '@fortawesome/free-solid-svg-icons'

const StepTwo = ({
    show = false,
    onBack,
    state,
    onChange
}) => {

    const disabledBtn = (state.tel && state.date && state.sex)? false:true;

    const handleOnBackStepPage = () => {
        if(onBack) onBack();
    }

    if(!show) return null

    return (
        <>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Input
                        icon={faTty}
                        label="หมายเลขโทรศัพท์" 
                        placeholder="หมายเลขโทรศัพท์"
                        defaultValue={state.tel}
                        onTextChange={text => {
                            if(onChange) onChange({tel: text})
                        }}
                    />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Input
                        icon={faCalendar}
                        label="วันที่เกิด"
                        type="date"
                        defaultValue={state.date}
                        onTextChange={text => {
                            if(onChange) onChange({date: text})
                        }}
                    />    
                </div>
                <div className={styles.col}>
                    <Select
                        icon={faGenderless}
                        defaultValue={state.sex}
                        label="เพศ"
                        onSelectChange={text => {
                            if(onChange) onChange({sex: text})
                        }}
                        option={[
                            {
                                value: 1,
                                name: "ชาย"
                            },
                            {
                                value: 2,
                                name: "หญิง"
                            }
                        ]}
                    />
                </div>
            </div>

            <div className={styles.footer}>
                <Button onClick={handleOnBackStepPage} outline>ย้อนกลับ</Button>
                <Button disabled={disabledBtn} onClick={() => {
                    console.log(state)
                }}>สำเร็จ</Button>
            </div>
        </>
    )
}

export default StepTwo