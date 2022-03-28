<template>
    <div class="container">
        <Headers />
        <Filters />
        <Grid />
    </div>
</template>

<script>
// @ is an alias to /src
import Headers from "@/components/Headers.vue";
import Filters from "@/components/Filters.vue";
import Grid from "@/components/Grid.vue";

export default {
    name: "Home",
    components: {
        Headers,
        Filters,
        Grid,
    },
};
</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>