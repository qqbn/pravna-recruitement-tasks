<template>
    <div class="filters">
        <input type="text" placeholder="Wyszukaj po imieniu i nazwisku" />
        <select>
            <option value="Wszystkie postaci" disabled selected>
                Wszystkie postaci
            </option>
        </select>
        <select>
            <option value="Wszystkie domy" disabled selected>
                Wszystkie domy
            </option>
        </select>
        <div class="buttons">
            <button class="search-btn">
                <img src="@/assets/icon-search.svg" alt="icon" />
            </button>
            <button class="clear-btn">
                <img src="@/assets/icon-clear.svg" alt="icon" />
            </button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.filters {
    width: 1316px;
    height: 49px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 32px;

    input,
    select {
        border-radius: 8px;
        border: 1px solid $selectBorderClr;
        padding: 0px 24px;
        font-size: 15px;
        outline: none;
        margin-right: 16px;
        background-color: white;
        color: $selectFontClr;
    }

    input::placeholder {
        color: $selectFontClr;
    }

    input[type="text"] {
        width: 428px;
        height: 100%;
    }

    select {
        width: 317px;
        height: 100%;
        appearance: none;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50"><polygon points="0,0 100,0 50, 50" style="fill:%23CED6E0;" /></svg>');
        background-position: right 24px top 50%;
        background-repeat: no-repeat;
        background-size: 16px 9px;
    }

    .buttons {
        height: 100%;
        width: 206px;
        display: flex;
        justify-content: space-between;
    }

    .search-btn,
    .clear-btn {
        width: 101px;
        height: 100%;
        background-color: $searchBtn;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 24px;
            width: 24px;
        }
    }
    .clear-btn {
        background-color: $clearBtn;
    }
}

@media only screen and (max-width: 1337px) {
    .filters {
        width: 100%;
        height: 49px !important;
        justify-content: center;
        padding: 0px 20px !important;
    }

    input,
    select {
        margin-bottom: 20px;
        margin: 0;
    }
    input {
        width: 40%;
    }
    select {
        width: 20%;
    }
    .buttons {
        width: 20%;
        .clear-btn {
            width: 45%;
        }
        .search-btn {
            width: 45%;
        }
    }
}

@media only screen and (max-width: 850px) {
    .filters {
        height: auto !important;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 0px 0px !important;
    }
    input,
    select {
        height: 49px !important;
        margin-bottom: 20px;
        margin-right: 0px !important;
    }
    .buttons {
        height: 49px !important;
    }
}

@media only screen and (max-width: 480px) {
    input {
        width: 90% !important;
    }
    select {
        width: 90% !important;
    }
}
</style>