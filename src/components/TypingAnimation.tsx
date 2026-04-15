import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypingAnimationProps {
  phrases: string[];
  baseText?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
  className?: string;
}

export function TypingAnimation({ 
  phrases, 
  baseText = "Hi, I'm ",
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 2000,
  className = ""
}: TypingAnimationProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {baseText}
      <span className="relative inline-block">
        {currentText}
        <motion.span
          className="inline-block ml-1 text-white"
          animate={{ opacity: showCursor ? 1 : 0.2 }}
          transition={{ duration: 0.1 }}
        >
          |
        </motion.span>
      </span>
    </span>
  );
}