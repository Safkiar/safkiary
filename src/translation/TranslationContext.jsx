import React, { createContext, useContext, useState} from "react";
import {dictionary} from "./translations";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
    const [lang, setLang]  = useState("pl")
    const t = (key) => dictionary[lang][key] || key;
    return (
        <TranslationContext.Provider value={{
            t, lang, setLang
        }}>
            {children}
        </TranslationContext.Provider>
    )


}

export const useTranslate = () => useContext(TranslationContext);