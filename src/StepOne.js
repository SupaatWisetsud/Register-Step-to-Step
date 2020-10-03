import React from "react"
import styles from "./style.module.css"
import { Button, Input } from "./components"
import { faSignature, faFileSignature, faEnvelope, faKey, faLock } from '@fortawesome/free-solid-svg-icons'

const StepOne = ({ show = false, onNext, state, onChange }) => {
  
  const disabledBtn = (state.fname && state.lname && state.email && state.pass && state.passcon)? false:true;

  const handleOnNextStepPage = () => {
    if (onNext) onNext();
  };

  if (!show) return null;
  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>
          <Input
            icon={faSignature}
            placeholder="ชื่อ"
            label="ชื่อ"
            defaultValue={state.fname}
            onTextChange={(text) => {
              if (onChange) onChange({ fname: text });
            }}
          />
        </div>
        <div className={styles.col}>
            <Input 
                icon={faFileSignature}
                placeholder="นามสกุล" 
                label="นามสกุล" 
                defaultValue={state.lname} 
                onTextChange={(text) => {
                    if (onChange) onChange({ lname: text });
                }}
            />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
            <Input 
                icon={faEnvelope}
                placeholder="อีเมลล์" 
                label="อีเมลล์" 
                defaultValue={state.email} 
                onTextChange={(text) => {
                    if (onChange) onChange({ email: text });
                }}
            />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <Input
            icon={faKey}
            type="password"
            placeholder="รหัสผ่าน"
            label="รหัสผ่าน"
            defaultValue={state.pass}
            onTextChange={(text) => {
              if (onChange) onChange({ pass: text });
            }}
          />
        </div>
        <div className={styles.col}>
          <Input
            icon={faLock}
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            label="ยืนยันรหัสผ่าน"
            defaultValue={state.passcon}
            onTextChange={(text) => {
              if (onChange) onChange({ passcon: text });
            }}
          />
        </div>
      </div>

      <div className={styles.footer}>
        <div></div>
        <Button disabled={disabledBtn} onClick={handleOnNextStepPage}>ถัดไป</Button>
      </div>
    </>
  );
};

export default StepOne;
