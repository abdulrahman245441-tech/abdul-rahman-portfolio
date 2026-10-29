import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

interface PortfolioContextType {
  isDark: boolean;
  toggleTheme: () => void;
  photoUrl: string;
  updatePhotoUrl: (newUrl: string) => void;
  resetPhotoUrl: () => void;
  isCustomPhoto: boolean;
  isCVModalOpen: boolean;
  openCVModal: () => void;
  closeCVModal: () => void;
  isGuideModalOpen: boolean;
  openGuideModal: () => void;
  closeGuideModal: () => void;
  contactSubject: string;
  setContactSubject: (subject: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const PHOTO_STORAGE_KEY = 'abdul_rahman_custom_photo';
const THEME_STORAGE_KEY = 'abdul_rahman_theme_mode';

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    }
    return true; // Default to dark navy theme as requested
  });

  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const savedPhoto = localStorage.getItem(PHOTO_STORAGE_KEY);
      if (savedPhoto) {
        return savedPhoto;
      }
    }
    return portfolioData.personal.profilePhoto;
  });

  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  const isCustomPhoto = photoUrl !== portfolioData.personal.profilePhoto;

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem(THEME_STORAGE_KEY, 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const updatePhotoUrl = (newUrl: string) => {
    setPhotoUrl(newUrl);
    try {
      localStorage.setItem(PHOTO_STORAGE_KEY, newUrl);
    } catch {
      // Storage quota or private mode handling
    }
  };

  const resetPhotoUrl = () => {
    setPhotoUrl(portfolioData.personal.profilePhoto);
    localStorage.removeItem(PHOTO_STORAGE_KEY);
  };

  const openCVModal = () => setIsCVModalOpen(true);
  const closeCVModal = () => setIsCVModalOpen(false);

  const openGuideModal = () => setIsGuideModalOpen(true);
  const closeGuideModal = () => setIsGuideModalOpen(false);

  return (
    <PortfolioContext.Provider
      value={{
        isDark,
        toggleTheme,
        photoUrl,
        updatePhotoUrl,
        resetPhotoUrl,
        isCustomPhoto,
        isCVModalOpen,
        openCVModal,
        closeCVModal,
        isGuideModalOpen,
        openGuideModal,
        closeGuideModal,
        contactSubject,
        setContactSubject,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
