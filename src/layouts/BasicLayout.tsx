import React, {ReactNode, FC} from 'react'
import { Link } from 'umi';
import type {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import { LineChartOutlined, EditOutlined, PlusCircleOutlined, TabletOutlined, AntDesignOutlined } from '@ant-design/icons';
import Footer from '../pages/components/Footer'
import Header from '../pages/components/Header'
import styles from './BasicLayout.less'
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import {message} from 'antd'



interface LayoutProps {
    children: ReactNode,
}



const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item) => {
    return {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
  });


const BasicLayout : FC<LayoutProps> = (props : LayoutProps) => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      navTheme= 'light'
      headerRender={() =>{
          return <Header />
      }}
      menuHeaderRender={(logo, title) => {
        return (
                <div className={styles.menuHeader}>
                  <div className='text-a'>
                    业精于勤，荒于嬉；
                  </div>
                  <div className='text-b'>
                    行成于思，毁于随。
                  </div>
                </div>
               )
      }}
      onMenuHeaderClick={()=>{
        message.success('好好学习，天天向上！！！')
      }}
      route={{
        routes: [
          {
            path: '/learn',
            name: '学习',
            icon: <EditOutlined />,
            routes: [
              {
                path: '/learn/questionList',
                name: '题目列表',
                components: '@/pages/learn/QuestionList'
              },
              {
                path: '/learn/addQuestion',
                name: '添加题目',
                components: '@/pages/learn/AddQuestion'
              },
            ]
           
          },
          {
            path: '/stat',
            name: '统计',
            icon: <LineChartOutlined />,
            routes: [
              {
                path: '/stat/index',
                name: '作答统计',
                components: '@/pages/stat/index'

              }
            ]
          }
        ]
      }}
      
      iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
      menuDataRender={menuDataRender}
      menuItemRender={({path, name})=>{
          return <Link to={path!}>{name}</Link>
      }}
      footerRender={()=>{
          return <Footer text='lastisee' />
      }}

    >
      <PageContainer header={{breadcrumb: {}, title: ''}}>
        {props.children}
      </PageContainer>
    </ProLayout>
  </div>
)

export default BasicLayout