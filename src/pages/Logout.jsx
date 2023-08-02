import React from 'react'

const Logout = () => {
    sessionStorage.clear()
    window.location = window.origin + "/";

  return (
    <div></div>
  )
}

export default Logout