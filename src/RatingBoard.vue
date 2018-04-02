<template>
  <div id="RatingBoard" class="ui container">
    <div class="ui fluid action input segment">
      <input type="text" v-model="nickname" placeholder="닉네임을 입력해주세요" />
      <button class="ui pink button inputNickname-btn" v-on:click="get_ratings">검색</button>
    </div>
    <div v-if="loaded" class="ratingBoard">
      <h2>{{ response.nickname }}</h2>
      <p>서버: {{ response.server }}</p>
      <div class="ratingBox-container ui three item stackable tabs menu">
        <div class="ratingBox solo item active">
          <i class="user icon"></i>
          SOLO: {{ response.solo.rating }}
        </div>
        <div class="ratingBox duo item">
          <i class="user icon"></i><i class="user icon"></i>
          DUO: {{ response.duo.rating }}
        </div>
        <div class="ratingBox squad item">
          <i class="users icon"></i>
          SQUAD:{{ response.squad.rating }}
        </div>
      </div>
      <ul>
        <li v-for="match in response.matches" :key="match.id">
          {{ match.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingBoard',
  data() {
    return {
      nickname: '',
      loaded: false,
      response: {
        nickname: '',
        server: '',
        matches: [],
        solo: {
          rating: '',
        },
        duo: {
          rating: '',
        },
        squad: {
          rating: '',
        },
      },
    }
  },
  methods: {
    get_ratings: function (e) {
      this.axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        this.loaded = true
        this.response.server = 'AS'
        this.response.nickname = this.nickname
        this.response.solo.rating = 1200
        this.response.duo.rating = 1300
        this.response.squad.rating = 1400
        this.response.matches = response.data
      })
    }
  }
}
</script>

<style>
</style>
