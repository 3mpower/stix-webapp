"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content?: React.ReactNode;
  background?: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

//   useEffect(() => {
//     startFlipping();

//     return () => clearInterval(interval);
//   }, []);
//   const startFlipping = () => {
//     interval = setInterval(() => {
//       setCards((prevCards: Card[]) => {
//         const newArray = [...prevCards]; // create a copy of the array
//         newArray.unshift(newArray.pop()!); // move the last element to the front
//         return newArray;
//       });
//     }, 5000);
//   };

  return (
    <div className="relative h-48 w-full md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className={`absolute ${card.background} md:w-96" flex h-full w-full flex-col justify-between rounded-t-3xl border border-neutral-200 p-4 dark:border-white/[0.1]  dark:shadow-white/[0.05] md:h-60`}
            style={{
              transformOrigin: "top center",
              backgroundImage: card.background,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
          </motion.div>
        );
      })}
    </div>
  );
};
