import React, {useEffect, useState} from 'react'
import styles from './Header.less'
import moment from 'moment'

interface HeaderProps {
    text?: string,
}
export default function Header (props : HeaderProps) {
    const {text = '行到水穷处，坐看云起时'} = props
    const [username, setUsername] = useState<string>('')
    useEffect(() =>{
        if(username === 'hello'){
            console.log('hello')
        }
    }, [])
    return (
        <div className={styles.header}>
            <div className='left-header'></div>
            <div className='right-header'>{text}</div>
        </div>
    )
}