<template>

  <ul>
    <UserItem  style="border: 2px solid red;"  v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></UserItem>
     <button class="btn btn-primary" @click="backtohome"  >
    ⬅️ Back to Home Page
  </button>
  </ul>
   
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods:{
    backtohome(){
      console.log("back to home!")
        this.$router.push('/teams');
           console.log(this.$router)
    }
   
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>