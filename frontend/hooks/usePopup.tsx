import { useState, useEffect } from 'react';

const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closePopup();
    }
  };

  const openPopup = (content: any) => {
    setContent(content);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setContent(null);
  };

  return { isOpen, content, openPopup, closePopup };
};

export default usePopup;
