import React from 'react'
import styles from '@/styles/Layout.module.css'

function Button(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled} className={props.disabled ? styles.disabledButton : styles.button}>
        {props.children}
    </button>
  )
}

export default Button