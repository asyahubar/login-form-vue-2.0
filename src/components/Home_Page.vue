<template>
    <div id="home-page" :class="{ darkTheme: lightTurnedOn }">
        <span class="light-switch">
            <i :class="theme" @click="switchLight"></i>
        </span>
        <h1>Look what we have!</h1>
        <div class="cards-wrapper">
            <Card v-for="card in cards" :key="card.name" :spices="card" :isLightOn="lightTurnedOn"/>
        </div>
    </div>
</template>

<script>
    import Card from './Card.vue'

    export default {
        name: 'Home_Page',
        components: {
            Card
        },
        data() {
            return {
                theme: "fas fa-lightbulb",
                cards: [],
                lightTurnedOn: false
            }
        },
        methods: {
            switchLight() {
                this.theme === "fas fa-lightbulb"
                    ? this.theme = "far fa-lightbulb"
                    : this.theme = "fas fa-lightbulb";
                this.lightTurnedOn === false
                    ? this.lightTurnedOn = true
                    : this.lightTurnedOn = false;
            }
        },
        created() {
            this.axios
                .get("https://api.myjson.com/bins/1ed2lq")
                .then(response => (this.cards = response.data.spices))
        }
    }
</script>

<style lang="scss">
    #home-page {
        min-height: 100vh;
    }

    .darkTheme {
        background-color: #1c1c1c;

        h1 {
            color: #aaa;
        }
    }

    .light-switch {
        position: absolute;
        bottom: 20px;
        right: 20px;
        font-size: 30px;
        cursor: pointer;
        color: #7d7d7d;
    }

    h1 {
        text-align: center;
        margin: 0;
        padding: 30px;
    }

    .cards-wrapper {
        display: flex;
        justify-content: space-around;
    }
</style>