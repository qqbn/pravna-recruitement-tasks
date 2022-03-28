<template>
    <div class="filters">
        <input
            type="text"
            placeholder="Wyszukaj po imieniu i nazwisku"
            v-model="inputText"
            @change="filterCharacters()"
        />
        <select v-model="selectedCharacter" @change="filterCharacters()">
            <option
                :value="charactersOption"
                v-for="charactersOption in charactersOptions"
                :key="charactersOption"
            >
                {{ charactersOption }}
            </option>
        </select>
        <select v-model="selectedHouse" @change="filterCharacters()">
            <option
                :value="housesOption"
                v-for="housesOption in housesOptions"
                :key="housesOption"
            >
                {{ housesOption }}
            </option>
        </select>
        <div class="buttons">
            <button class="search-btn" @click="filterCharacters()">
                <img src="@/assets/icon-search.svg" alt="icon" />
            </button>
            <button class="clear-btn" @click="clearInputs()">
                <img src="@/assets/icon-clear.svg" alt="icon" />
            </button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            charactersOptions: [
                //tablica dostępnych opcji dla filtru postci
                "Wszystkie postaci",
                "Uczniowie",
                "Kadra nauczycielska",
            ],
            housesOptions: [
                //tablica dostępnych opcji dla filtru domy
                "Wszystkie domy",
                "Gryffindor",
                "Slytherin",
                "Ravenclaw",
                "Hufflepuff",
            ],
            selectedCharacter: "Wszystkie postaci", //aktualnie wybrany filter postaci
            selectedHouse: "Wszystkie domy", //aktualnie wybrany filter domu
            inputText: "", //zmienna służąca do wyszukiwania po imieniu i nazwisku
            lsKey: "filters",
        };
    },

    methods: {
        ...mapMutations(["setDisplay"]), //mutacja, ustawiająca nową tablicę wyświetlanych postaci

        filterCharacters() {
            //funkcja filtrująca postacie, w zależności od użytych filtrów. funkcja wykorzustuje tymaczsową tablicę, a następnie zawęża wyniki, w zależności od wybranych filtrów
            let tmpCharacters = this.$store.state.allCharacters; //przypisanie stanu 'allCharacters' do zmiennej pomocniczej

            if (this.inputText.length >= 3) {
                //jeżeli tekst wprowadzony w inpucie jest większy lub równy 3, zostaje wywołana funkcja filtrująca po imieniu i naziwsku
                tmpCharacters = this.filterByText(tmpCharacters);
            }

            if (this.selectedHouse != "Wszystkie domy") {
                //jeżeli został wybrany filtr inny niż 'Wszystkie domy' zostaje wywołana funkcja filtrująca po domach postaci oraz
                tmpCharacters = this.filterByHouse(tmpCharacters); //w LocalStorage zostaje zapisany użyty filtr
            }

            if (this.selectedCharacter != "Wszystkie postaci") {
                //jeżeli został wybrany filtr inny niż 'wszystkie postaci', intrukcja switch
                switch (
                    this.selectedCharacter //sprawdza jaka opcja została wybrana a następnie zostaje wywołana funkcja filtrująca po danej opcji(uczeń/kadra) oraz w LocalStorage zostaje zapisany użyty filtr
                ) {
                    case "Uczniowie":
                        tmpCharacters = this.filterByStudent(tmpCharacters);
                        break;
                    case "Kadra nauczycielska":
                        tmpCharacters = this.filterByStaff(tmpCharacters);
                        break;
                }
            }
            this.setLS();
            this.setDisplay(tmpCharacters); //wywołanie mutacji z vuex store aby, zaktualizować wyświetlaną tablicę postaci
        },

        filterByHouse(arr) {
            //funkcja filtrująca po domu, funkcja ta filtruje wszystkich użytkowników w zależności od wybranego domu, oraz zwraca tablicę tych użytkowników
            return arr.filter((element) => {
                return element.house === this.selectedHouse;
            });
        },

        filterByText(arr) {
            //funkcja wyszukująca postaci, na podstawie wprowadzone tekstu oraz zwraca tablicę postaci do wyświetlenia.
            return arr.filter((element) => {
                return element.name
                    .toLowerCase()
                    .match(this.inputText.toLowerCase());
            });
        },

        filterByStudent(arr) {
            //funkcja ta wywołuje się gdy, zostanie wybrana opcja 'uczniowie', zwraca tablicę postaci, którzy są uczniami
            return arr.filter((element) => {
                return element.hogwartsStudent === true;
            });
        },

        filterByStaff(arr) {
            //funkcja ta wywołuje się gdy, zostanie wybrana opcja 'kadra nauczycielska', zwróci tablicę wszystkich nauczycieli
            return arr.filter((element) => {
                return element.hogwartsStaff === true;
            });
        },

        clearInputs() {
            //funkcja czyszcząca inputy, oraz resetująca wyświetlaną tablicę
            this.$store.state.displayCharacters =
                this.$store.state.allCharacters;
            this.selectedCharacter = "Wszystkie postaci";
            this.selectedHouse = "Wszystkie domy";
            this.inputText = "";
            this.setLS();
        },

        setLS() {
            //funkcja ta zapisuje w localstorage ostatnio użyte filtry
            let filters = {
                characters: this.selectedCharacter,
                houses: this.selectedHouse,
            };
            localStorage.setItem(this.lsKey, JSON.stringify(filters));
        },
    },

    computed: {
        displayCharacters: function () {
            //computed property zmiennej z vuex store 'allCharacters'
            return this.$store.state.allCharacters;
        },
    },

    watch: {
        inputText: function () {
            //watcher- obseruje każdą zmianę wprowadzanego tekstu, i wywołuję funckę filtrująca
            this.filterCharacters();
        },

        displayCharacters: function () {
            //watcher ten sprawdza, moment w którym, zmienan 'allCharacters' w storze vuexa zostanie wypełniona danymi a następnie
            this.filterCharacters(); //funkcję filtrująca z filtrami zapisanymi w local sotrage
        },
    },

    mounted() {
        //na starcie aplikacji, zostają pobrane filtry z localstorage
        if (localStorage.getItem(this.lsKey)) {
            let filters = JSON.parse(localStorage.getItem(this.lsKey));
            this.selectedHouse = filters.houses;
            this.selectedCharacter = filters.characters;
        }
    },
};
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
            background-color: $searchBtn;
        }
    }
    .clear-btn {
        background-color: $clearBtn;
        img {
            background-color: $clearBtn;
        }
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