import React, {createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
    isLoggedIn: false,
    onLogin: (email, password) => {},
    onLogout: () => {}
})

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedUser = localStorage.getItem('isLoggedIn')

        if (storedUser === 'LOGGED_IN') {
            setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', 'LOGGED_IN')
        setIsLoggedIn(true)
    }

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogin: loginHandler,
                onLogout: logoutHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext

