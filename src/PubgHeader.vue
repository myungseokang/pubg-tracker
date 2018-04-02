<template>
  <div id="pubg_header" class="ui masthead vertical tab">
    <div class="ui container">
      <h2 class="ui center aligned icon header">
        <i class="terminal icon"></i>
        PUBG Tracker
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pubg_header',
}
</script>

<style>
#pubg_header.tab.masthead {
  display: block;
  padding-bottom: 0em;
  box-shadow: none;
}

#pubg_header.masthead {
  position: relative;
  z-index: 3;
  margin: 0em;
  min-height: 185px;
  padding: 3em 0em;
  background-color: #FFFFFF;
  box-shadow: none;
}
</style>
