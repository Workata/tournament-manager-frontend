import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AppContext = React.createContext({
  tokenValue: '',
  setTokenValue: () => {},
  setTokenCookie: () => {},
  getTokenCookie: () => {},
  deleteTokenCookie: () => {}
})

export default function ContextProvider (props) {
  const [tokenValue, setTokenValue] = useState()

  const setTokenCookie = (name, value, minutes = 1440, path = '/') => {
    console.log('Set token')
    const dt = new Date()
    dt.setMinutes(dt.getMinutes() + minutes)
    const expires = dt.toUTCString()
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; expires=${expires}; path=${path}`
  }

  // https://www.w3schools.com/js/js_cookies.asp
  const getTokenCookie = (cname) => {
    // console.log("Start get token cookie");
    const name = cname + '='
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        // console.log("here");
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  const deleteTokenCookie = (name, path) => {
    setTokenCookie(name, '', -1, path)
  }

  return (
    <AppContext.Provider
      value={{
        tokenValue,
        setTokenValue,

        setTokenCookie,
        deleteTokenCookie,
        getTokenCookie
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

// TODO setup correct prop types
ContextProvider.propTypes = {
  children: PropTypes.any
}