<template>
  <div id="app">
    <label>
      <input type="text" v-model="nickname" placeholder="닉네임을 입력해주세요" />
      <input type="submit" value="Submit" v-on:click="get_ratings"/>
    </label>
    <div v-if="ok" class="ratingBoard">
      <h2>{{ nickname }}</h2>
      <p>server: {{ server }}</p>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      nickname: '',
      ok: false,
      server: '',
      users: [],
    }
  },
  methods: {
    get_ratings: function (e) {
      this.axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        this.ok = true
        this.server = 'AS'
        this.users = response.data
        console.log(response.data)
      })
    }
  }
}
</script>

<style>
</style>
