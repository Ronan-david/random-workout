<template>
    <div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
            :stroke-dasharray="circleDasharray"
            class="base-timer__path-remaining"
            :class="remainingPathColor"
            d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
            "
            ></path>
        </g>
        </svg>
        <span class="base-timer__label">{{ formattedTimeLeft }}</span>
    </div>
</template>
<script>
export default {
    name: 'timer',
    data : function () {
        return {
            timePassed: 0,
            timerInterval: null,
            FULL_DASH_ARRAY: 283,
            WARNING_THRESHOLD: 10,
            ALERT_THRESHOLD: 5,
            numExos: null,
            numRepos: null,
            now: ''
        }
    },
    props: {
        timeLimit: {
            type: Number,
            default: () => 20
        },
        startAgain: {
            type: Boolean,
            default: () => false
        }
    },
    computed: {
        circleDasharray() {
            return `${(this.timeFraction * this.FULL_DASH_ARRAY).toFixed(0)} 283`;
        },
        formattedTimeLeft() {
            let timeLeftFormatted = this.timeLeft
            let minutes = Math.floor(timeLeftFormatted / 60)
            let seconds = timeLeftFormatted % 60
            if (seconds < 10) {
                seconds = `0${seconds}`
            }
            return `${minutes}:${seconds}`
        },
        timeLeft() {
            return this.timeLimit - this.timePassed
        },
        timeFraction() {
            let rawTimeFraction = this.timeLeft / this.timeLimit
            return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction)
        },
        remainingPathColor() {
            let { alert, warning, info } = {
                info: {
                    color: "green"
                },
                warning: {
                    color: "orange",
                    threshold: this.WARNING_THRESHOLD
                },
                alert: {
                    color: "red",
                    threshold: this.ALERT_THRESHOLD
                }
            }
            if (this.timeLeft <= alert.threshold) {
                return alert.color
            } else if (this.timeLeft <= warning.threshold) {
                return warning.color
            } else {
                return info.color
            }
        }
    },
    watch: {
        timeLeft(newValue) {
            if (newValue === 0) {
                this.onTimesUp()
            }
        },
        startAgain(newValue) {
            if (newValue === true) {
                this.onTimesUp()
                this.startTimer()
                this.$emit('reset-start', false)
            }
        }
    },
    methods: {
        onTimesUp() {
            clearInterval(this.timerInterval)
            this.timePassed = 0            
        },
        startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000)
        }
    },
    mounted() {
        this.startTimer()
    }
}
</script>
<style lang="scss">
.base-timer {
    position: relative;
    width: 100px;
    height: 100px;
    position: absolute;
    right: 0;
    top: 50px;

    &__circle {
        fill: none;
        stroke: none;
    }

    &__path-elapsed {
        stroke-width: 7px;
        stroke:grey;
    }

    &__label {
        position: absolute;    
        width: 100px;
        height: 100px;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
    }

    &__path-remaining {
        stroke-width: 7px;
        stroke-linecap: round;
        transform: rotate(90deg);
        transform-origin: center;
        transition: 1s linear all;
        stroke: rgb(65, 184, 131);
    }
    
    &__svg {
        transform: scaleX(-1);
    }
}
    .orange {
        stroke: rgb(255, 162, 23);
    }
    .red {
        stroke: rgb(230, 17, 17);
    }
</style>