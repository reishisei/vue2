<template>
  <div class="mian">
    <input type="text" @keyup="settext" />
    <div class="ctrl">
      <p @click="zoomIn">+</p>
      <p @click="zoomOut">-</p>
    </div>
    <div class="move">
      <div ref="dom" class="hello">
      <!-- <div ref="dom" class="hello" @wheel="wheel"> -->
        <h1>{{ msg }}</h1>
        <p>
          For a guide and recipes on how to configure / customize this project,<br>
          check out the
          <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
          <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
          <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
          <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
          <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
          <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
          <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
          <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
          <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
          <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {getData} from '@/api/home'
import Panzoom from "@panzoom/panzoom"
export default {
  name: 'HelloWorld',
  props: {
  },
  data() {
    return {
      msg: 'test',
      panzoom: null,
      zoom: 1,
      timeOut: null,
    }
  },
  mounted() {
    this.getPanzoomElement();
    // this.getData();
  },
  methods: {
    settext() {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => {
        console.log('123')
      }, 1000);
    },
    getPanzoomElement () {
      this.panzoom = Panzoom(this.$refs.dom, {
        maxScale: 2,
        minScale: 0,
        overflow: "auto",
        canvas: true,
      })
    },
    // wheel (e) {
    //   console.log('aa', e)
    //   if(e.ctrlkey) {
    //     this.panzoom.zoomWithWheel(e);
    //   }
    // },
    zoomIn() {
      this.zoom += 0.1;
      this.panzoom.zoomIn();
    },
    zoomOut() {
      this.zoom -= 0.1
      this.panzoom.zoomOut();
    },
    async getData() {
      const res = await getData();
        console.log('res', res);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ctrl {
  position: fixed;
  left: 50%;
  top: 0;
  z-index: 10;
}
.mian {
  width: 100vw;
  height: 100vh;
}
.move {
  width: 100%;
  height: 100%;
}
.hello {
  width: 1080px;
  margin: 0 auto;
  background-color: #ccc;
}
h3 {
  margin: 40px 0 0;
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
