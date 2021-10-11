import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Signup from '../../components/Signup'
export default function SignupContainer () {
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
    setLoading(true)
    localStorage.setItem('token', 'ejma01290lalk109019njshaaajjaiaj109109y')
    setLoading(false)
    history.push('/')
  }

  return <Signup onSubmit={onSubmit} loading={loading} />
}
