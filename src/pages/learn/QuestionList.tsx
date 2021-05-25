import React, {FC, useState, useEffect} from 'react'
import styles from './QuestionList.less'

interface QuestionListProps {

}

const QuestionList : FC<QuestionListProps> = (props) =>{
    return (
        <div className={styles.questionList}>
            这是题目列表页面
        </div>
    )
}

export default QuestionList