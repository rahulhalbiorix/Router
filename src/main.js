import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import { createRouter, createWebHistory, routerKey } from 'vue-router';
import TeamMembers from './components/teams/TeamMembers.vue';
import PageNotFound from './components/PageNotFound/pageNotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     path: '/',
        //     redirect: '/teams'
        // },   short hand property of above is => alias 
        {
            path: '/teams',
            components: { default: TeamsList, footer: TeamsFooter },
            alias: '/',
            children: [
                {
                    name: "Team-Members",
                    path: ':teamId',
                    component: TeamMembers,
                    props: true,
                    beforeEnter: (to,from , next )=>{
                       
                        if(to.params.teamId == 't1'){
                                next();
                        }else{
                            alert('Acces denied ! you can access only view Team t1 members!....');
                            next('/');
                        }
                    }
                },
            ]
        },
        {
            path: '/users',
            components: { default: UsersList, footer: TeamsFooter },
        },
        {
            path: '/:dtuawcvsub(.*)',
            component: PageNotFound
        }
        // used for catch all route  give path name dynamically by adding colon and add .* synatx for catch all route
    ],
    linkActiveClass:'active'
}
)

const isAuthenticated = true; 

router.beforeEach((to,from ,next)=>{
//   console.log("Global beforeEch guard");
//   console.log("Navigating to before each " , to.fullPath);
//   console.log("coming from before each " , from.fullPath);

if(to.path === '/users'  && !isAuthenticated){
  alert('🚫 Access Denied! Please log in.');
  next('/teams')
}
else{
    next();
}

},

router.afterEach((to, from) => {
//   console.log('[afterEach] Navigation Complete');
  if(isAuthenticated){
      alert("you arer logged in");
  }
//   console.log('Navigated to :', to.fullPath);
//   console.log('Navigated for:', from.fullPath);
})


)

const app = createApp(App)
app.use(router);
app.mount('#app')


