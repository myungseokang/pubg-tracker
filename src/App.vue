<template>
  <div id="app">
    <label>
      <input type="text" v-model="nickname" placeholder="닉네임을 입력해주세요" />
      <input type="submit" value="Submit" v-on:click="get_ratings"/>
    </label>
    <div v-if="ok" class="ratingBoard">
      <h2>{{ nickname }}</h2>
      <p>server: {{ server }}</p>
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
    }
  },
  methods: {
    get_ratings: function (e) {
      this.ok = true
      this.server = 'AS'
    }
  }
}
</script>

<style>
</style>
