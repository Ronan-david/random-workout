<template>
    <footer class="footer">
        <span
            v-if="button === 'Start'"
            class="action"
            :class="!readyToGo ? 'action--stop' : 'action--start'"
            @click="startWorkout"
        >
        {{button}}
        </span>
        <span
            v-else
            class="action action--next"
            v-html="'>'"
            @click="nextExo"
        />
    </footer>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
    name: "footerbar",
    props: {
        button: {
            type: String,
            default: 'Start'
        }
    },
    methods: {
        startWorkout () {
            this.$emit('start-workout', true)
        },
        nextExo(){
            this.$emit('next-exo')
        }
    },
    computed: {
        ...mapGetters([
            "getChosenSettings"
        ]),
        readyToGo () {
            console.log(this.getChosenSettings)
            return this.getChosenSettings.location && this.getChosenSettings.level && this.getChosenSettings.muscles && this.getChosenSettings.timing
        }
    },
}
</script>
<style lang="scss">
    .footer {
        background: $bg-color;
        padding: 0 0 1rem 0;
        
        .action {
            width:50px;
            height:50px;
            border-radius: 50%;
            cursor: pointer;
            transition: all .2s ease-in-out;
            margin: 0 auto;
            color: $font-color;
            background: $button-bg-color-incurved;
            box-shadow: $button-shadow-incurved;
            font-weight:600;
            display: flex;
            align-items: center;
            justify-content: center;

            &--next {
                font-size: 26px;
            }   
        }
    }

    @keyframes scaleUp{
        from {transform: scale(0)}
        to {transform: scale(2)}
    }
</style>