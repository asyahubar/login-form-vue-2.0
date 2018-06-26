<template>
    <div class="one-card" :class="{ darkColoring: isLightOn }">
        <img :src="spices.image">
        <p class="type">type: {{ spices.type }}</p>
        <p class="spice-name">{{ spices.name }}</p>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: [
            'spices',
            'isLightOn'
        ],
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">
    .one-card {
        display: inline-block;
        width: 220px;
        padding: 40px 20px;
        text-align: center;
        background-color: #eee;

        img {
            width: 220px;
            height: auto;
        }

        .type {
            font-size: 11px;
        }

        .spice-name {
            font-size: 18px;
            text-transform: uppercase;
        }
    }

    .darkColoring {
        background-color: #444;

        .type {
            color: #7d7d7d;
        }

        .spice-name {
            color: #aaa;
        }
    }
</style>