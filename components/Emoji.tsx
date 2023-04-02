import classNames from "classnames";
import styles from "./Emoji.module.css";
import { StaticImageData } from "next/image";

export interface EmojiProps {
  image: StaticImageData;
}

export default function Emoji({ image }: EmojiProps) {
  return <img className={classNames(styles.emoji)} src={image.src} alt="emoji" />;
}
