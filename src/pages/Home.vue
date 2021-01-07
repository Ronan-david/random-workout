<template>
    <div class="home">
        <section class="puff-in-center">
            <img class="logo" src="../assets/logo.png" alt="Randow - your randomized workout">
            <h1 class="puff-in-center">Your randomized workout</h1>
        </section>
        <span class="button puff-in-center" @click="goToNextPage('settings')">Enter</span>
    </div>
</template>
<script>
export default {
    name: 'home',
    data () {
        return {
        }
    },
    methods: {
        goToNextPage (value) {
            this.$router.push({name: value})
        }
    }
}
</script>
<style lang="scss">
.puff-in-center {
	-webkit-animation: puff-in-center 1.1s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	animation: puff-in-center 1.1s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

/**
 * ----------------------------------------
 * animation puff-in-center
 * ----------------------------------------
 */
@-webkit-keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}

</style>