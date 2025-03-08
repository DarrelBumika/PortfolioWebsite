import { createContext, useContext, useState } from "react";

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState("home");

    return (
        <SectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </SectionContext.Provider>
    );
};

export const useSection = () => useContext(SectionContext);