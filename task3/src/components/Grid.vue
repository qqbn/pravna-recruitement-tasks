<template>
    <div class="grid">
        <p class="results">
            Wyniki wyszukiwania ({{ displayCharacters.length }})
        </p>
        <div class="grid-cards">
            <Card
                v-for="character in displayCharacters"
                :key="character.id"
                :character="character"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "./Card.vue";
export default {
    components: {
        Card,
    },
    computed: {
        ...mapState(["displayCharacters"]), //pobranie tablicy wyświetlające ze stora by móc wyświetlić postacie
    },
};
</script>

<style lang="scss" scoped>
.grid {
    margin-top: 48px;
    height: auto;
    width: 1304px !important;

    .results {
        font-size: 15px;
        color: $parClr;
        margin-bottom: 16px;
    }

    .grid-cards {
        width: 1304px;
        height: auto;
        display: flex;
        justify-content: flex-start;
        gap: 0px 12px;
        flex-wrap: wrap;
        align-items: center;
    }
}

@media only screen and (max-width: 1340px) {
    .grid {
        width: 100% !important;
    }

    .grid-cards {
        width: 100% !important;
        justify-content: space-around !important;
    }

    .results {
        width: 100% !important;
        padding: 0px 24px;
    }
}

@media only screen and (max-width: 970px) {
    .grid-cards {
        justify-content: space-around !important;
    }
}

@media only screen and (max-width: 650px) {
    .results {
        position: relative !important;
        left: 50%;
        transform: translateX(-50%);
        width: 250px !important;
        text-align: center;
    }
}
</style>