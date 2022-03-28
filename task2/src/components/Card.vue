<template>
    <div class="card">
        <div class="avatar-border">
            <div class="avatar" alt="hermione"></div>
        </div>
        <p class="name">Hermiona Granger</p>
        <div class="info">
            <div class="house">
                <div class="house-color"></div>
                <div class="house-name">Gryffindor</div>
            </div>
            <div class="birth">
                <img
                    src="@/assets/icon-birthday-cake.svg"
                    class="birth-icon"
                    alt="icon"
                />
                <p class="birth-text">27.05.1992</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
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
        background-color: $classClr;
    }
    .avatar {
        height: 128px;
        width: 128px;
        border-radius: 64px;
        background-image: url("../assets/hermonie.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .name {
        margin-top: 20px;
        margin-bottom: 16px;
        font-size: 20px;
        color: $cardName;
        font-weight: bold;
    }

    .house {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 9px;

        .house-color {
            background-color: $griffClr;
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
        }
    }

    .birth {
        display: flex;
        justify-content: center;
        align-items: center;

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
        }
    }
}
</style>