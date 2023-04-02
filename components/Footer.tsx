import classNames from 'classnames';
import styles from './Footer.module.css';
import footerLogo from '@/images/footerLogo.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={classNames(styles.grid, 'container')}>
        <div>
          <p>hej@syson.se</p>
        </div>
        <div>
          <p>
            <strong>Postadress</strong>
          </p>
          <p>
            Syson AB
            <br />
            Kivra: 556934-1851
            <br />
            106 31 Stockholm
          </p>
        </div>
        <div>
          <p>Orgnr: 556934-1851</p>
        </div>
        <div className={styles.icon}>
          <Image src={footerLogo} alt="Syson" />
        </div>
      </div>
    </footer>
  );
}
