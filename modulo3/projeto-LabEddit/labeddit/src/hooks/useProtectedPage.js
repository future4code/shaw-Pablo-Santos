import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../router/coodinator'

const useProtectedPage = () => {
  const navigate =useNavigate()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
      goToLoginPage(navigate)
    }
  }, [navigate])
}

export default useProtectedPage