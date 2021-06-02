import React from 'react'

export default function Footer(props) {
  const {location} = props
  console.log(location.pathname)
  
  const renderCheck = () => {
    if (!(location.pathname === '/login-signup')) {
      return (
        <div>
          Footer
        </div>
      )
    } else {
      return (
        null
      )
    }
  }

  return (
    renderCheck()
  )
}
