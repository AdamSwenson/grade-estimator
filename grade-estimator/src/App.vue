<template>
  <div id="app">
<div class="container">
    <h3>Estimated course grade: {{estimatedGrade}}</h3>

    <graded-item v-for="i in items" item-name="i.name" pct-of-total="i.pctOfTotal" options="options"></graded-item>

</div>
  </div>
</template>

<script>
  import gradedItem from 'components/graded-item';

export default {
  name: 'App',
    components: [gradedItem],

    data : function(){
      return {
        items: [{name: 'Journals', pctOfTotal: 0.05}],
        options: [16, 15]
      };
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
