<template>
  <section>
    <h2> {{ teamName }} </h2>
    <ul>
      <UserItem v-for="member of members"  :id="member.id"  :key="member.id" :name="member.fullName" :role="member.role">
      </UserItem>
    </ul>
  </section>
</template>

<script>
import { watch } from 'vue';
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],
  props:['teamId'],

  components:{
    UserItem
  },

  data() {
    return {
      teamName: "",
      members: []
    };
  },
  created() {
      this.loadTeamMember(this.teamId);

  },
  watch:{
          teamId(newteamId) {
            console.log("ascsd",newteamId );
              this.loadTeamMember(newteamId);
          }
       },

  methods: {
    roleClass(role) {
      if (role === 'Engineer') return 'role--engineer';
      if (role === 'Consultant') return 'role--consultant';
      return '';
    },
    loadTeamMember(teamId){

       console.log("team id is" , teamId);
    const selectedTeams = this.teams.find(team => team.id == teamId);
    console.log(selectedTeams);
    const members = selectedTeams.members;
    console.log(members);
    const selectedMembers = [];
    for (let member of members) {
      const selectedUser = this.users.find(user => user.id == member);
      console.log(selectedUser);
      selectedMembers.push(selectedUser);

      this.members = selectedMembers;
      this.teamName = selectedTeams.name;
    }
    console.log("s m ", selectedMembers);    
    }
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem 2rem;
  border-radius: 12px;
  background-color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  margin-bottom: 1.5rem;
  color: #11005c;
  font-size: 1.75rem;
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.member-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
  padding: 3rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.member-id {
  font-weight: bold;
  color: #888;
  width: 15%;
}

.member-name {
  flex: 1;
  font-weight: 500;
  color: #333;
  padding: 0 1rem;
}

.member-role {
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
}

.role--engineer {
  background-color: #007bff;
  color: #fff;
}

.role--consultant {
  background-color: #af003a;
  color: #fff;
}
</style>
