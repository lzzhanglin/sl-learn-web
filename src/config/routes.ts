export default [
    {
      path: '/',
      component: '../layouts/BasicLayout', 
      routes: [
        {
          path: '/learn',
          name: '学习',
          icon: 'icon-twitter',
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