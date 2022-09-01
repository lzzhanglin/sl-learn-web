import {useState, useEffect, FC} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useQuery} from 'react-query'
import ConnectState from '../../models/connect'
import {Form, Input, Button} from 'antd'
import axios from 'axios'
import {SERVER_URL} from '../../config/server'

import styles from './Login.less'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

interface LoginProps {

}

type valueType = {
    username: string,
    password: string,
}

const Login : FC<LoginProps> = (props) => {
    const name = useSelector((state : ConnectState) => state.app?.name)
    const [form] = Form.useForm()

   

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const login = () => {   
      
        form.validateFields().then(values => {
            console.log('value--->', values)
            sendLoginReq(values)
        }).catch(error => {
            console.log('输入有误')
        })

    }

    const sendLoginReq = async (values : valueType)=>{
        // const {data} = await axios.post(`${SERVER_URL}/userLogin`, {username: values.username, password: values.password})
        const {data} = await axios.get(`${SERVER_URL}/question/getAllQuestion`)
        console.log('登录的响应为', data)

    }
    console.log('denglu--------->')
    return (
        <div className={styles.login}>
            <div className='login-form'>
                <div className='login-title'>请登录</div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form} 
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{width: 180}}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password style={{width: 180}}/>
                    </Form.Item>
                </Form>
                <div className='submit-btn'>
                    <Button type="primary" onClick={login}>
                        登录
                    </Button>
                </div>
            </div>
           
        </div>
    )
}

export default Login