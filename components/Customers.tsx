import classNames from 'classnames';
import styles from './Customers.module.css';
import trustly from '@/images/trustly.png';
import comhem from '@/images/comhem.png';
import sj from '@/images/sj.png';
import klarna from '@/images/klarna.png';
import assa from '@/images/assa.png';
import Image from 'next/image';

export default function Customers() {
  return (
    <div className={classNames(styles.customers)}>
      <div className={classNames('container', styles.content)}>
        <h1 className={styles.title}>Några av våra kunder</h1>
        <div className={classNames(styles.logos)}>
          <Image
            className={styles.logo}
            src={klarna}
            width={180}
            alt="Klarna"
          />
          <Image
            className={styles.logo}
            src={comhem}
            width={180}
            alt="Com Hem"
          />
          <Image className={styles.logo} src={sj} height={52} alt="SJ" />
          <Image className={styles.logo} src={assa} width={180} alt="ASSA" />
          <Image
            className={styles.logo}
            src={trustly}
            width={180}
            alt="Trustly"
          />
        </div>
      </div>
    </div>
  );
}
