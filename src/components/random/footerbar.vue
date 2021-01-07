<template>
    <footer class="footer">
        <span
            v-if="button === 'Start'"
            class="action action--start"
            @click="startWorkout"
        >
        {{button}}
        </span>
        <img
            v-else
            class="action action--next"
            src="@/assets/img/shuffle.png"
            @click="nextExo"
        />
    </footer>
</template>
<script>
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
    }
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

            &--start {
                font-weight:600;
                display: flex;
                align-items: center;
                justify-content: center;

                &:active {
                }
            }

            &--next {
                &:active {
                }  
            }   
        }
    }

    @keyframes scaleUp{
        from {transform: scale(0)}
        to {transform: scale(2)}
    }
</style>