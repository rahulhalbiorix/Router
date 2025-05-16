<template>
  <!-- <button @click="gotoTeam" >
    confirm
  </button> -->
  <ul>
    <UserItem v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></UserItem>
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

    // gotoTeam(){
    //   this.$router.push('teams')  
    //   programatically give navigation
    // }
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