import React from 'react';
import styles from './styles.module.css';

interface ComponentProps {
  variant: 'medium' | 'small' | 'default';
  color: 'default' | 'black'
}

const Spinner = ({ variant = 'default', color= 'default' }: ComponentProps) => {
  return <span className={`${styles.loader} ${styles[variant]} ${styles[color]}`} />;
};

export default Spinner;
