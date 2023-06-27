'use client';
import { ReactNode, createContext, useState } from "react";

interface LanguageContextData {
  isEnglish: boolean
  changeLanguage: () => void;
}

interface LanguageContextProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext({} as LanguageContextData);

export function LanguageContextProvider({ children }: LanguageContextProviderProps) {
  const [isEnglish, setIsEnglish] = useState(true)

  function changeLanguage() {
    setIsEnglish(!isEnglish)
  }
  return (
    <LanguageContext.Provider value={{ isEnglish, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}