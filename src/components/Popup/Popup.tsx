import React from 'react';
import { PopupProps } from './Popup.types';
import styles from './Popup.module.scss';

export function Popup(props: PopupProps) {
  return <div className={styles.popup}>{props.form}</div>;
}
