import classNames from 'classnames';
import styles from './Gasell.module.css';
import gasell from '@/images/gasell.png';
import Image from 'next/image';

export default function Gasell() {
  return (
    <div className={classNames(styles.gasell)}>
      <Image
        className={classNames(styles.image)}
        src={gasell}
        alt="DI Gasell 2018"
      />
    </div>
  );
}
