export default [
    {
      path: '/login',
      name: '登录',
      // hideInMenu: true,
      component: '@/pages/index/Login'
    },
    {
      path: '/',
      component: '../layouts/BasicLayout', 
      wrappers: [
        '@/wrappers/Auth',
      ],
      routes: [
        {
          path: '/login',
          hideInMenu: true,
          name: '登录',
          component: '@/pages/index/Login',

        },

        {
          path: '/learn',
          name: '学习11',
          icon: 'twitter',
          routes: [
            {
              path: '/learn/questionList', 
              name: '题目列表',
              component: '@/pages/learn/QuestionList'
            },
            {
              path: '/learn/addQuestion', 
              name: '添加题目',
              component: '@/pages/learn/AddQuestion'
            },
          ]
        },
        { 
          path: '/stat/index',
          component: '@/pages/stat/index',
          name: '统计',
        },

      ]
      
    },
    
    
    
    
   
    

  ]