import classNames from 'classnames';
import jsLogo from '@/images/js-logo.svg';
import reactLogo from '@/images/react-logo.svg';
import javaLogo from '@/images/java-logo.svg';
import netLogo from '@/images/net-logo.svg';
import awsLogo from '@/images/aws-logo.svg';
import nodeLogo from '@/images/node-logo.svg';
import typescriptLogo from '@/images/typescript-logo.svg';
import styles from './Buzzwords.module.css';
import Image from 'next/image';

export default function Buzzwords() {
  return (
    <div className={styles.buzzwords}>
      <div className={classNames('container', styles.content)}>
        <h1 className={styles.title}>Tekniker vi gillar</h1>
        <div className={styles.logos}>
          <Image
            className={styles.logo}
            src={jsLogo}
            alt="JavaScript"
            title="JavaScript"
          />
          <Image
            className={styles.logo}
            src={reactLogo}
            alt="React"
            title="React"
          />
          <Image
            className={styles.logo}
            src={javaLogo}
            alt="Java"
            title="Java"
          />
          <Image
            className={styles.logo}
            src={netLogo}
            alt=".NET"
            title=".NET"
          />
          <Image className={styles.logo} src={awsLogo} alt="AWS" title="AWS" />
          <Image
            className={styles.logo}
            src={typescriptLogo}
            alt="TypeScript"
            title="TypeScript"
          />
          <Image
            className={styles.logo}
            src={nodeLogo}
            alt="Node"
            title="Node"
          />
        </div>
      </div>
    </div>
  );
}
