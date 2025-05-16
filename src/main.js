import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter } from 'vue-router'
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import { createWebHistory } from 'vue-router';

const router = createRouter({
    history:createWebHistory(),
     routes:[
        {
            path:'/teams',
            component:TeamsList,
        },
        {
            path:'/users',
            component:UsersList
        }
     ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')

// App.Use(router);


// createApp(App).mount('#app')
