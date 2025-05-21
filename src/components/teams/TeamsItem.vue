<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <!-- <router-link :to="{ name:'Team-Members', params:{teamId:id} }" >View Members</router-link> -->
    <router-link :to="toViewMember" >View Members</router-link>  <!--using computed property-->
  </li>
  
</template>

<script>
export default {

  props: ['name', 'memberCount' , 'id'],
   computed:{
    toViewMember(){
      // console.log("view member is work");
      return { name:'Team-Members', params:{teamId:this.id} , query:{sort:'abbdhdhdh'} }
    }
   }

};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>