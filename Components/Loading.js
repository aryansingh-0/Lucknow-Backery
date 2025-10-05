'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loading() {
  const gifs = [
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDUyNmo2amI3OWdxdHM3OWt5aDV1c2NybjVkN242NDc4NnF4eG94ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Gs72PRqzJVjLmhKk5m/giphy.gif',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDUyNmo2amI3OWdxdHM3OWt5aDV1c2NybjVkN242NDc4NnF4eG94ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Gs72PRqzJVjLmhKk5m/giphy.gif',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDUyNmo2amI3OWdxdHM3OWt5aDV1c2NybjVkN242NDc4NnF4eG94ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Gs72PRqzJVjLmhKk5m/giphy.gif',
  ];

  const [selectedGif, setSelectedGif] = useState(gifs[0]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Pick a random GIF on load
    setSelectedGif(gifs[Math.floor(Math.random() * gifs.length)]);

    // Start upward animation after 2 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: -600 }} // exit animation
          transition={{ duration: 1.5, ease: 'easeInOut',opacity:0 }}
           style={{ backgroundImage: "url('https://res.cloudinary.com/dgp04dpun/image/upload/v1759683544/aktu%20brand/ms2ujujm1fgdfswfdofn.png')" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center w-full bg-red-600  bg-cover bg-no-repeat  "
        >
          <motion.img
            src={selectedGif}
            alt="Loading cake..."
            initial={{ y: 0 }} 
            exit={{ y: -200 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="w-40 h-40 object-contain mb-6 drop-shadow-lg"
          />
          <motion.p
            initial={{ y: 0 }} 
            exit={{ y: -100 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="text-white font-semibold text-2xl"
          >
            Loading your cakes...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
