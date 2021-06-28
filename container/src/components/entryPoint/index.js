import React, { useState, useEffect } from "react";
import { LoadingOutlined } from '@ant-design/icons'
import Header from '../header'
// import axios from 'axios'

const RedirectComponent = (props) => {
//   const [path] = useState(props.match.params.path)
//   const [role] = useState(props.match.params.role)
//   const [token] = useState(props.match.params.token)

  useEffect(() => {
        async function authUser() {
          getUserMe()
        }
        authUser()
    // eslint-disable-next-line
    }, [])
  const getUserMe = async () => {
      
  }

  return (
    <div>
      <Header />

      <div style={{ marginTop: '250px' }}>
        <div style={{ width: '80px', margin: 'auto', textAlign: 'center' }}>
          <LoadingOutlined style={{ fontSize: '3rem' }} />
        </div>
      </div>
    </div>
  )
}

export default RedirectComponent;