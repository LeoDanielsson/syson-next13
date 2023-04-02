import Link from 'next/link';
import styles from './Header.module.css';
import Emoji from '@/components/Emoji';
import wavingHand from '@/emojis/waving-hand.png';
import landingPortraitSmallWebp from '@/images/landing-portrait.webp';
import landingLandscapeWebp from '@/images/landing-landscape.webp';
import Image from 'next/image';
import SysonLogo from '@/components/SysonLogo';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={landingPortraitSmallWebp}
        className={styles.heroImage}
        alt="Syson"
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroVideo}
        poster={landingLandscapeWebp.src}
      >
        <source src="/video/desktop.mp4" type="video/mp4" />
      </video>
      <div className={styles.content}>
        <Link href="/">
          <SysonLogo className={styles.logo} />
        </Link>
        <div className={styles.headline}>
          <h1>Frihet, bra häng och schysst lön</h1>
          <p>
            Hej! <Emoji image={wavingHand} /> Vi är konsulter i Stockholm,
            duktiga inom systemutveckling och test.
          </p>
        </div>
      </div>
    </header>
  );
}
