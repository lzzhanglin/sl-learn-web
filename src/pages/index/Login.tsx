import {useState, useEffect, FC} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ConnectState from '../../models/connect'

import styles from './Login.less'

interface LoginProps {

}

const Login : FC<LoginProps> = (props) => {
    const name = useSelector((state : ConnectState) => state.app?.name)
    return (
        <div className={styles.login}>
            <div className='login-form'>{name}</div>
        </div>
    )
}

export default Login