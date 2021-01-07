<template>
    <section class="exo">
        <nav class="navigation">
            <img class="logo" src="@/assets/logo.png">
        </nav>
        <h2 class="exo__title">{{exo.title}}</h2>
        <timer
            :start-again="startAgain"
            @reset-start="reset"
            :time-limit="getChosenSettings.timing"
        />
        <img
            class="exo__img"
            :src="require(`@/assets/exos/${exo.imgName}`)"
        >
        <footer-bar :button="'Shuffle'" @next-exo="changeExo"/>
    </section>
</template>
<script>

import { mapGetters } from 'vuex'
import allWorkouts from '@/assets/jsons/index.js'
import footerBar from './footerbar'
import timer from '../timer'

export default {
    name: "exericesHolder",
    components: {
        footerBar,
        timer
    },
    data () {
        return {
            workoutExos: [],
            numberOfExos: 0,
            exo: null,
            timerInterval: null,
            timeLimit: 20,
            timePassed: 0,
            startAgain: false
        }
    },
    methods: {
        reset (value) {
            this.startAgain = value
        },
        shuffle (number) {
            let nb = Math.floor(Math.random() * Math.floor(number))
            this.exo = this.workoutExos[nb]
        },
        changeExo () {
            this.shuffle(this.numberOfExos)
            this.startAgain = true
        },
        getWkByMuscleGroups () {
            return allWorkouts.filter(workout => this.getChosenSettings.muscles.includes(workout.name))
        },
        getWkByLocation (wkByMuscleGroups) {
            return wkByMuscleGroups.map(workout =>
                workout.value.filter(val => val.location.includes(this.getChosenSettings.location))
            )
        },
        getWkByLevel (wkByLocation) {
            return wkByLocation.map(workout => 
                workout.filter(wk => wk.level.includes(this.getChosenSettings.level))
            )
        },
        startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        }
    },
    computed: {
        ...mapGetters([
            "getChosenSettings"
        ])
    },
    created () {
        const wkByMuscleGroups = this.getWkByMuscleGroups()
        const wkByLocation = this.getWkByLocation(wkByMuscleGroups)
        const wkByLevel = this.getWkByLevel(wkByLocation)
        wkByLevel.forEach(wk => wk.forEach(work => this.workoutExos.push(work)))
        this.numberOfExos = this.workoutExos.length
        this.shuffle(this.numberOfExos)
    },
    mounted() {
        this.startTimer()
    },
}
</script>
<style lang="scss">
.exo {
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    position: relative;

    &__title {
        position: absolute;
        top: 50px;
        z-index: 1;
    }

    &__img {
        width:100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>