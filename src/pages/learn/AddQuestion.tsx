import React, {FC, useState, useEffect} from 'react'
import styles from './AddQuestion.less'

interface AddQuestionProps {

}

const AddQuestion : FC<AddQuestionProps> = (props) =>{
    return (
        <div className={styles.addQuestion}>
            这是添加题目页面
        </div>
    )
}

export default AddQuestion