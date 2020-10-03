import React, { useCallback, useReducer, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'
import StepOne from './StepOne';
import StepTwo from './StepTwo';

function App() {

  const [step, setStep] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  const setData = useCallback( obj => dispatch({type: "SET_DATA", payload: obj}), []);

  return (
    <div className={styles.container} >
      <div className={styles.from}>
        
        <p className={styles.title}> 
          <FontAwesomeIcon icon={faUserCircle} style={{marginRight: 5}} /> สร้างบัญชี
        </p>

        <div className={styles.content}>
          <StepOne 
            show={step === 0}
            onNext={() => setStep(step + 1)} 
            state={state}
            onChange={obj => {
              setData(obj)
            }}
          />        
          
          <StepTwo 
            show={step === 1} 
            onBack={() => setStep(step - 1)}
            state={state}
            onChange={obj => {
              setData(obj)
            }}
          />
        </div>

      </div>
    </div>
  );
}

const reducer = (state, action) => {
  switch (action.type) {
      case "SET_DATA":
          return Object.assign({},state,action.payload)
      default:
          return state;
  }
}
const initialState = {
}

export default App;
