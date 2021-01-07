<template>
    <main class="main">
        <nav class="navigation">
            <img class="logo" src="../../assets/logo.png">
        </nav>
        <settings-container :ready-to-go="letsGo" />
        <footerbar :button="'Start'" @start-workout="startWorkout" />
    </main>
</template>
<script>

import settingsContainer from './settingsContainer'
import footerbar from './footerbar'

export default {
    name: "settings",
    components: {
        settingsContainer,
        footerbar
    },
    data () {
        return {
            letsGo: false
        }
    },
    methods: {
        startWorkout (value) {
            this.letsGo = value
        }
    }
}
</script>
<style lang="scss">
.main {
    height: 100%;
    display: flex;
    flex-flow: column;
    position: relative;
}
.navigation {
    width:100%;
    height:3rem;
    text-align: center;
    background: #42a5f4;

    .logo {
        height: 100%;
    }
}
</style>