'use client';

import image from '@/images/404.gif';
import Image from 'next/image';

export default function Page404() {
  return (
    <>
      <h1>404 :(</h1>
      <Image style={{ maxWidth: '90vw' }} src={image} alt="Not found" />
    </>
  );
}
