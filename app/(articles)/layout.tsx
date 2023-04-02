import { ReactNode } from 'react';
import ArticleHeader from './ArticleHeader';
import styles from './article.module.css';

interface ArticleLayoutProps {
  children: ReactNode;
}

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <>
      <ArticleHeader />
      <main className={styles.content}>{children}</main>
    </>
  );
}
