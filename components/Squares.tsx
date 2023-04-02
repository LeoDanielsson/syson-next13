import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './Squares.module.css';
import arrow from '@/icons/arrow-dark.svg';
import Emoji from './Emoji';
import pencil from '@/emojis/pencil.png';
import chart from '@/emojis/chart.png';
import woman from '@/emojis/woman_office_worker.png';
import { StaticImageData } from 'next/image';

interface SquareProps {
  emoji: StaticImageData;
  title: string;
  description: string;
  url: string;
  color: string;
}

const Square = ({ emoji, title, description, url, color }: SquareProps) => (
  <Link href={url} className={classNames(styles.square, styles[color])}>
    <div className={styles.content}>
      <div>
        <p className={styles.emoji}>
          <Emoji image={emoji} />
        </p>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.link}>
        <span className={styles.linkText}>{description}</span>{' '}
        <img src={arrow.src} alt="" />
      </div>
    </div>
  </Link>
);

export default function Squares() {
  return (
    <section>
      <div className={classNames('container', styles.squares)}>
        <Square
          emoji={pencil}
          title="Lönemodellen i detalj"
          description="Lägg till mer semester, pension, mm"
          color="tradewind"
          url="/lonemodell"
        />
        <Square
          emoji={woman}
          title="Hur är konsultlivet?"
          description="Läs mer"
          color="cashmere"
          url="/konsultlivet"
        />
        <Square
          emoji={chart}
          title="Hur vi mår är viktigast"
          description="Läs mer"
          color="citrus"
          url="/gladbladet"
        />
      </div>
    </section>
  );
}
