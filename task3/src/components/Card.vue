<template>
    <div class="card">
        <div class="avatar-border" :class="character.houseColor">
            <div
                class="avatar"
                :style="{ backgroundImage: 'url(' + character.image + ')' }"
                v-if="character.image"
            ></div>
            <div class="avatar" v-else></div>
        </div>
        <p class="name">{{ character.name }}</p>
        <div class="info">
            <div class="house" v-if="character.house">
                <div class="house-color" :class="character.houseColor"></div>
                <div class="house-name">{{ character.house }}</div>
            </div>
            <div class="birth" v-if="character.dateOfBirth">
                <img
                    src="@/assets/icon-birthday-cake.svg"
                    class="birth-icon"
                    alt="icon"
                />
                <p class="birth-text">{{ character.dateOfBirth }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["character"],
};
</script>

<style lang="scss" scoped>
.card {
    height: 283px;
    width: 317px;
    background-color: $cardClr;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;

    .avatar-border {
        height: 136px;
        width: 136px;
        border-radius: 68px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        // background-color: $classClr;
    }
    .avatar {
        height: 128px;
        width: 128px;
        border-radius: 64px;
        background-image: url("../assets/avatar.png");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .name {
        margin-top: 20px;
        margin-bottom: 16px;
        font-size: 20px;
        color: $cardName;
        font-weight: bold;
        background-color: $cardClr;
    }

    .house {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 9px;
        background-color: $cardClr;

        .house-color {
            height: 16px;
            width: 16px;
            border-radius: 4px;
            margin-right: 4px;
        }

        .house-name {
            font-size: 15px;
            color: $textCardClr;
            margin-left: 4px;
            width: 76px;
            text-align: left;
            background-color: $cardClr;
        }
    }

    .info {
        background-color: $cardClr;
    }
    .birth {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $cardClr;

        .birth-icon {
            height: 16px;
            width: 16px;
            margin-right: 4px;
        }

        .birth-text {
            font-size: 15px;
            color: $textCardClr;
            margin-left: 4px;
            width: 76px;
            text-align: left;
            background-color: $cardClr;
        }
    }

    .red {
        background-color: $griffClr;
    }

    .green {
        background-color: $slytherinClr;
    }
    .yellow {
        background-color: $huffClr;
    }

    .blue {
        background-color: $ravenClr;
    }
}
</style>