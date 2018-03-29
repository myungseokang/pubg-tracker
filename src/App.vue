<template>
  <div id="app">
    <label>
      <input type="text" v-model="nickname" placeholder="닉네임을 입력해주세요" />
      <input type="submit" value="Submit" v-on:click="get_ratings"/>
    </label>
    <p>INPUT: {{ nickname }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      nickname: '',
    }
  },
  methods: {
    get_ratings: function (e) {
      alert(this.nickname)
    }
  }
}
</script>

<style>
</style>
