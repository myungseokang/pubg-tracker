<template>
  <div id="app">
    <pubg-header></pubg-header>
    <div class="ui main container">
      <rating-board></rating-board>
    </div>
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
}
</script>

<style>
</style>
