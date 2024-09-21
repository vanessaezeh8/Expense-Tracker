import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from './_components/Header';
import Hero from './_components/Hero';
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <h1>this is good</h1>
    </div>
  )
}