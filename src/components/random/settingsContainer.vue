<template>
    <div class="setting">
        <h3 class="main__title">Choose your settings</h3>
        <section class="setting__container"> 
            <p class="setting__title">{{settings[0].title}}</p>
            <div v-for="(choice, index) in settings[0].choices" :key="index" class="setting__input">  
                <input
                    type="radio"
                    :id="choice"
                    :value="choice"
                    v-model="checkedLocationSetting"
                    class="setting__radio"
                >
                <label :for="choice">{{choice}}</label>
            </div>
        </section>
        <section class="setting__container"> 
            <p class="setting__title">{{settings[1].title}}</p>      
            <div v-for="(choice, index) in settings[1].choices" :key="index" class="setting__input">  
                <input
                    type="radio"
                    :id="choice"
                    :value="choice"
                    v-model="checkedLevelSetting"
                    class="setting__radio"
                >
                <label :for="choice">{{choice}}</label>
            </div>
        </section>
        <section class="setting__container"> 
            <p class="setting__title">{{settings[2].title}}</p>      
            <div v-for="(choice, index) in settings[2].choices" :key="index" class="setting__input">  
                <input
                    type="checkbox"
                    :id="choice"
                    :value="choice"
                    v-model="checkedMusclesSetting"
                    class="setting__checkbox"
                >
                <label :for="choice">{{choice}}</label>
            </div>
        </section>
        <section class="setting__container"> 
            <p class="setting__title">{{settings[3].title}}</p>      
            <div v-for="(choice, index) in settings[3].choices" :key="index" class="setting__input">  
                <input
                    type="radio"
                    :id="choice"
                    :value="choice"
                    v-model="checkedTimingSetting"
                    class="setting__radio"
                >
                <label :for="choice">{{choice}}</label>
            </div>
        </section>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: "settingsContainer",
    props: {
        readyToGo: {
            type: Boolean,
            default: () => false
        }
    },
    data () {
        return {
            settings: [
                {
                    title: "Location",
                    choices: ["Home", "Outside", "Gym"]
                },
                {
                    title: "Level",
                    choices: ["Beginner", "Confirmed", "Advanced"]
                },
                {
                    title: "Muscle groups (4 max)",
                    choices: ["Abs", "Back", "Arms", "Chest", "Legs"]
                },
                {
                    title: "Exercice timing (secondes)",
                    choices: [20, 30, 45, 60]
                }
            ],
            checkedLocationSetting: [],
            checkedLevelSetting: [],
            checkedMusclesSetting: [],
            checkedTimingSetting: []
        }
    },
    methods: {
        ...mapActions({
            setMusclesSettings: 'setMusclesSettings',
            setLocationSettings: 'setLocationSettings',
            setLevelSettings: 'setLevelSettings',
            setTimingSettings: 'setTimingSettings'
        })
    },
    watch: {
        readyToGo () {
            this.setMusclesSettings(this.checkedMusclesSetting)
            this.setLocationSettings(this.checkedLocationSetting)
            this.setLevelSettings(this.checkedLevelSetting)
            this.setTimingSettings(this.checkedTimingSetting)
            this.$router.push({name: "exercices"})
        }
    }
}
</script>
<style lang="scss">
.setting {
    &__container {
        display: flex;
        justify-content: space-evenly;
        flex-flow: row wrap;
        margin-bottom: 5vh;
    }
    &__title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;
        width: 95%;
        border-radius: 5px;
        font-weight: 600;
        margin: 0 auto;
        margin-bottom: 2vh;
        color: $font-color;
        background: $bg-color;
        box-shadow: $button-shadow-curved;
    }

    &__input{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    &__radio, &__checkbox {
        width:1.25rem;
        height:1.2rem;
        box-shadow: $button-shadow-curved;
        cursor: pointer;
    }
}
</style>