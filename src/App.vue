<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  },
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpdateUI = true;
      });
    }
  },
  async accept() {
    this.showUpdateUI = false;
    await this.$workbox.messageSW({ type: "SKIP_WAITING" });
  },
  mounted () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
}
html {
  height: -webkit-fill-available;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  color: #2c3e50;
  background: #ffffff;
  max-width: 500px;
  width: 100%;
  height: 100%;
  padding: 0;
}

.home {
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.button {
  display:inline-block;
  padding:.75rem .9375rem;
  margin:0 0.3em 0.3em 0;
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  text-align:center;
  transition: all 0.2s;
  font-weight: 600;
  width: 35%;
  color: #ffffff;
  cursor: pointer;
  background: #0077c2;

  &--disabled {
    background: #e6e6e6;
    color: #b2b2b2;
    cursor: not-allowed;
  }
  &__stop {
    background: #da5111;
  }
}
</style>
