<template>
  <div class="hello">
    <h1  v-on:click="() => {this.increment()}">{{ msg }} {{ this.count }} {{ this.test }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import { State } from '@/vuex/modules/test';

export default Vue.extend({
  name: 'HelloWorld',
  data() {
    return {
      msg: 'test',
    };
  },
  computed: {
    test(): number {
      return this.count > 10 ? 1 : 0;
    },
    ...mapState('test', {
      count: (state: State) => state.count,
    }),
  },
  methods: {
    ...mapActions('test', [
      'increment',
      'decrement',
    ]),
  },
});
</script>
