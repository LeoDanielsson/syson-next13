'use client';

import classNames from 'classnames';
import { RefObject, useEffect, useRef, useState } from 'react';
import arrow from '@/icons/arrow.svg';
import people from '@/peoples';
import styles from './People.module.css';
import { shuffle } from '@/utils/shuffle';

interface LinkProps {
  url: string;
  title: string;
}

const Link = ({ url, title }: LinkProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={classNames(styles.link, styles.highlight)}
  >
    <span className={styles.linkText}>{title}</span> <img src={arrow} alt="" />
  </a>
);

type RefMap = { [key: string]: RefObject<HTMLDivElement> };

export default () => {
  const [highlighted, setHighlighted] = useState<string | undefined>();
  const peopleElement = useRef<HTMLDivElement>(null);
  const [shuffledPeople, setShuffledPeople] = useState(people);

  const refs: RefMap = people.reduce((refMap, person) => {
    refMap[person.name] = useRef<HTMLDivElement>(null);
    return refMap;
  }, {} as RefMap);

  const highlightCenter = () => {
    const centerPerson = Object.keys(refs).find((name) => {
      const rect = refs[name]?.current?.getBoundingClientRect();

      const viewportCenter = window.innerWidth / 2;
      return (
        rect !== undefined &&
        rect.left < viewportCenter &&
        rect.right > viewportCenter
      );
    });
    setHighlighted(centerPerson);
  };

  const mouseEnter = (name: string) => {
    setHighlighted(name);
  };

  const scroll = () => {
    highlightCenter();
  };

  useEffect(() => {
    highlightCenter();
  }, []);

  useEffect(() => {
    setShuffledPeople(shuffle(people));
  }, []);

  return (
    <div className={styles.people} ref={peopleElement} onScroll={scroll}>
      {shuffledPeople.map((person) => (
        <div key={person.name} className={styles.person}>
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${person.image})` }}
            onMouseEnter={() => mouseEnter(person.name)}
            ref={refs[person.name]}
          />
          <div
            className={classNames(
              styles.details,
              highlighted === person.name && styles.highlighted
            )}
            style={{ backgroundImage: `url(${person.image})` }}
            ref={refs[person.name]}
          >
            <div className={classNames(styles.name, styles.highlight)}>
              {person.name}
            </div>
            <div className={styles.bottomDetails}>
              <div className={classNames(styles.quote, styles.highlight)}>
                {person.quote}
              </div>
              {person.linkedInUrl && (
                <Link url={person.linkedInUrl} title="LinkedIn" />
              )}
              {person.profileUrl && (
                <Link url={person.profileUrl} title="Profil" />
              )}
              {person.mail && (
                <Link url={'mailto:' + person.mail} title={person.mail} />
              )}
              {person.phone && (
                <Link url={'tel:' + person.phone} title={person.phone} />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
