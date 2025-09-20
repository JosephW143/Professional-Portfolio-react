import React, { useState, useEffect } from 'react';

const Typer = ({ texts, speed = 50, deleteSpeed = 30, pauseDuration = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Convert single text to array for backward compatibility
  const textArray = Array.isArray(texts) ? texts : [texts];

  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (currentCharIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(prevText => prevText.slice(0, -1));
          setCurrentCharIndex(prevIndex => prevIndex - 1);
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex(prevIndex => (prevIndex + 1) % textArray.length);
      }
    } else {
      // Typing mode
      const currentText = textArray[currentTextIndex];
      if (currentCharIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prevText => prevText + currentText[currentCharIndex]);
          setCurrentCharIndex(prevIndex => prevIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing current text, pause before deleting
        if (textArray.length > 1) {
          setIsPaused(true);
        }
      }
    }
  }, [currentCharIndex, currentTextIndex, isDeleting, isPaused, textArray, speed, deleteSpeed, pauseDuration]);

  return (
    <span>
      {displayedText}
      <span className="animate-blink text-white">|</span>
    </span>
  );
};

export default Typer;