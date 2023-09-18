/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react'
import './Modal.style.css'

const Modal = ({ title, texts, className, active, error, setError }) => {
  const mobal = useRef(null)

  useEffect(() => {
    if (error) {
      mobal.current.classList.add(active)
    }
  }, [error])

  const hiddenMobal = () => {
    mobal.current.classList.remove(active)
    setError(false)
  }

  return (
    <div className={className} ref={mobal} onClick={hiddenMobal}>
      <h3>{title}</h3>
      <p>
        {texts}
      </p>
    </div>
  )
}

export default Modal
