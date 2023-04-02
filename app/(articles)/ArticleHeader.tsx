import Link from 'next/link';
import logo from '@/images/logo-green.png';
import styles from './ArticleHeader.module.css';
import Image from 'next/image';

export default function ArticleHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.background} />
      <Link href="/">
        <Image src={logo} alt="Syson Logo" width={150} />
      </Link>
    </header>
  );
}
