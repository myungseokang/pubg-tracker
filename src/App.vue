<template>
  <div id="app" class="ui container">
    <div class="ui segment">
      <label>
        <div class="ui large input InputNickname">
          <input type="text" v-model="nickname" placeholder="닉네임을 입력해주세요" />
        </div>
        <button class="ui pink large button InputNicknameBtn" v-on:click="get_ratings">검색</button>
      </label>
    </div>
    <div v-if="loaded" class="ratingBoard">
      <h2>{{ response.nickname }}</h2>
      <p>server: {{ response.server }}</p>
      <ul>
        <li v-for="user in response.users" :key="user.id">
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
      loaded: false,
      response: {
        nickname: '',
        server: '',
        users: [],
      },
    }
  },
  methods: {
    get_ratings: function (e) {
      this.axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        this.response.nickname = this.nickname
        this.loaded = true
        this.response.server = 'AS'
        this.response.users = response.data
        console.log(response.data)
      })
    }
  }
}
</script>

<style>
.InputNickname {
  width: 80%;
  box-sizing: border-box;
  margin: 0 0;
}
.InputNicknameBtn {
  width: 19%;
  box-sizing: border-box;
  margin: 0 0;
}
</style>
