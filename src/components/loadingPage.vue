<template>
    <section class="loading-page">
        <span ref="timeLoader" class="puff-in-center puff-in-center--faster loading-page__numbers">{{time}}</span>
    </section>
</template>
<script>
export default {
    name: "loadingPage",
    data () {
        return {
            time: 3,
            interval: null
        }
    },
    methods: {
        counter () {
            if (this.time === 1) {
                this.$emit('end-loader', false)
                clearInterval(this.interval)    
            } else {
                this.time--
            }
        }
    },
    mounted () {
        this.interval = setInterval(() => {
            this.counter()
        }, 1050)
    }
}
</script>
<style lang="scss">
    .loading-page {
        height:100%;
        display:flex;
        justify-content: center;
        align-items: center;

        &__numbers{
            font-size: 6rem;
            font-weight: 600;
            text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 7px;
        }
    }
    .time{
        &--animation {
        }
    }
</style>