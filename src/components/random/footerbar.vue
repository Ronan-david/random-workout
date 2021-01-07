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
        width: 100%;
        height:6vh;
        background-color: #0077c1;
        position: absolute;
        bottom: 0;

        .action {
            top:0;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            width:50px;
            height:50px;
            border-radius: 50%;
            cursor: pointer;
            transition: all .2s ease-in-out; 
            border: 10px solid #0077c1;

            &--start {
                background-color: #004c90;
                color: white;
                font-weight:600;
                display: flex;
                align-items: center;
                justify-content: center;

                &:active {
                    background-color: #42a5f4;
                }
            }

            &--next {
                background-color: #0077c1;

                &:active {
                    background-color: #42a5f4;
                }  
            }   
        }
    }

    @keyframes scaleUp{
        from {transform: scale(0)}
        to {transform: scale(2)}
    }
</style>