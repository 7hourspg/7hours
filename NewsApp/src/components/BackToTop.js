import React, { useEffect, useState } from 'react'

function BackToTop() {
  const [scroll, setScroll] = useState(false)
  const listenScrollEvent = () => {
    if (window.scrollY >= 1000) {
      setScroll(true)
    }
    else {
      setScroll(false)
    }

  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [])
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })}


  return (
    <>
      <div className={
        scroll ? 'show' : 'hide'
      }>

        <h1 className='arrow' onClick={goToTop}> ↑ </h1>
      </div>


    </>
  )
}

export default BackToTop