<template>
 
  <ul>
    <TeamsItem style="border: 2px solid black;background-color: lightsalmon;"
      v-for="team in teams"
      :id="team.id"
      :key="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></TeamsItem>  
  </ul>

</template>

<script>

import TeamsItem from './TeamsItem.vue';

export default {
  components: {
    TeamsItem
  },
  inject: ['teams'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
  background-color: pink;
}
</style>