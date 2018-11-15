// module.exports = [{
//     path: '/',
//     component: '../layouts/BasicLayout',  // layout for pages in routes
//     routes: [
//       // dashboard
//       { path: '/', redirect: '/dashboard/analysis' },
//       {
//         path: '/dashboard',
//         name: 'dashboard',
//         icon: 'dashboard',
//         routes: [
//           { path: '/dashboard/form', name: 'analysis', component: './Form' }
          
//         ],
//       },
//     ],
//   }]

  export default {
    routes: [
     
      { path: '/form', component: './b', Routes: ['./routes/rout.config.js'] },
      { path: '/users', component: './users/_layout',
        routes: [
          { path: '/invoice/form', component: './Invoice/Form' },
          { path: '/users/:id', component: './users/id' }
        ]
      },
    ],
  };
  