import React from 'react'
import styles from '../../styles/AppControlInput.module.css'

function AppControlInput({children, value, name, controlType, onChange}) {
  return (
    <div className={styles.inputControl}>
        <label>{children}</label>
        { controlType === 'input' && <input value={value} name={name} onChange={onChange}></input> }
        { controlType === 'textarea' && <textarea value={value} name={name} rows="10" onChange={onChange}></textarea> }
  </div>
  )
}


AppControlInput.defaultProps = {
    controlType: 'input',
  };
export default AppControlInput