<template>
    <div class="header">
        <h1>HP Character Browser</h1>
        <h6>Meet the characters of the HP novel</h6>
    </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
    width: 687px;
    height: auto;
    margin-top: 120px;
    color: $headerClr;

    h1 {
        width: 100%;
        height: 72px;
        font-size: 64px;
        font-weight: bold;
    }

    h6 {
        font-size: 24px;
        width: 100%;
        text-align: center;
        font-weight: normal;
        margin-top: 24px;
    }
}

@media only screen and (max-width: 730px) {
    .header {
        width: 100%;
    }

    h1 {
        height: auto;

        font-size: 54px !important;
        text-align: center;
    }
}

@media only screen and (max-width: 620px) {
    .header {
        margin-top: 80px !important;
    }
    h1 {
        height: auto !important;
        font-size: 36px !important;
    }

    h6 {
        font-size: 18px !important;
        margin-top: 8px !important;
    }
}

@media only screen and (max-width: 430px) {
    h1 {
        font-size: 32px !important;
    }

    h6 {
        font-size: 16px !important;
        margin-top: 0px !important;
    }
}
</style>