import React from 'react'
import { CardStack } from './ui/card-stack'

const CARDS = [
    {
      id: 0,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      background: "url('/images/gachapon.png')",
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      background: 'bg-muted dark:bg-slate-700',
      content: (
        <p>
          2
        </p>
      ),
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      background: "dark:bg-foreground",
      content: (
        <p>
          3
        </p>
      ),
    },
  ];

const StackedGachapon = () => {
  return (
    <div className="mt-7 flex min-h-[25vh] w-[full] items-center justify-center">
      <CardStack items={CARDS} />
    </div>
  )
}

export default StackedGachapon