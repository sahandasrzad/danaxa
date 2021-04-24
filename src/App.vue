<template>
  <div id="app">
    <div class="app-container">

  <Toolbar class="practice" />
    <List class="practice" />
    </div>
  
  </div>
</template>

<script>
import List from './components/List.vue'
import Toolbar from './components/Toolbar.vue'
export default {
  name: 'App',
  components: {
    List,
    Toolbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}
.practice{
  width: 50%;
}

</style>
