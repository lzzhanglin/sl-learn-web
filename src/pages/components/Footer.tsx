import React from 'react'
import styles from './Footer.less'
import moment from 'moment'

interface FooterProps {
    text: string,
}
export default function Footer (props : FooterProps) {
    const {text} = props
    return (
        <div className={styles.footer}>Copyright &copy; 2021-{moment().get('year')} {text}. All rights reserved.</div>
    )
}