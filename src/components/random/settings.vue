<template>
    <div>
        <main class="main">
            <settings-container :ready-to-go="letsGo" />
        </main>
        <footerbar :button="'Start'" @start-workout="startWorkout" />
    </div>
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
    display: flex;
    flex-flow: column;
    position: relative;
}
</style>