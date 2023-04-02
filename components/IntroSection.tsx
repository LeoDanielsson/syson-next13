import classNames from "classnames";
import styles from "./IntroSection.module.css";
import Emoji from "./Emoji";
import { StaticImageData } from "next/image";

export interface IntroSectionProps {
  title: string;
  children: React.ReactNode
  emoji: StaticImageData
}

export default function IntroSection({ title, children, emoji }: IntroSectionProps) {
  return (
    <section>
      <div
        className={classNames(
          "container",
          styles.intro,
        )}
      >
        <div className={styles.background} />
        <h2 className={styles.headline}>
          {title} {emoji && <Emoji image={emoji} />}
        </h2>
        <div className={styles.text}>{children}</div>
      </div>
    </section>
  );
}
