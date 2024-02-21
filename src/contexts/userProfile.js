import { createContext, useState } from "react";


export const UserProfile = createContext();

export const UserStore = ({ children }) => {
    const [info, setInfo] = useState(0);

    return (
        <UserProfile.Provider value={{info, setInfo}}>
            {children}
        </UserProfile.Provider>
    )
}