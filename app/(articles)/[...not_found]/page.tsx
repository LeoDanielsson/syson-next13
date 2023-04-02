import { notFound } from 'next/navigation';

/*
  Workaround route. Can be removed when Next 13 has implemented support for catching unmatched routes.
*/
export default function fallbackRoute() {
  notFound();
}
