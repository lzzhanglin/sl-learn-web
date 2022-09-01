import React from 'react'
import { Redirect } from 'umi'
import {useSelector, useDispatch} from 'react-redux'
import ConnectState from '@/models/connect'

interface AuthProps  {
    children: React.ReactNode,
}

const Auth = (props : AuthProps) => {
  
    const userInfo = useSelector((state : ConnectState) => state.app.userInfo)
    const loginUrl = '/login'
    console.log('auth--->', loginUrl)
    if (userInfo?.username) {
        return <div>{ props.children }</div>;
    } else {
        return <Redirect to={loginUrl} />;
    }
}
export default Auth