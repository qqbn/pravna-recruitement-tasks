import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import {createStore} from "vuex";

//zmienna store - wykorzystanie vuexa
const store = createStore({
    state() {
        //state, zmienne vuexa
        return {
            allCharacters: [], //tablica ta przechowywuje wszystkie postaci zwrócone z enpoint'a
            displayCharacters: [], //tablica ta służy do wyświetlania postaci w zależności od wybranych filtrów
        };
    },

    mutations: {
        addToDisplay(state, payload) {
            //mutacja ta, po pobraniu danych, ustawia postacie w tablicach w porządku alfabetycznym,
            state.allCharacters = payload; //dodatkowo, każdej postacji, dodaje pole związane z kolorem jej domu
            state.allCharacters.sort((a, b) => (a.name > b.name ? 1 : -1));

            state.allCharacters.forEach(element => {
                switch (element.house) {
                    case "Gryffindor":
                        element.houseColor = "red";
                        break;
                    case "Slytherin":
                        element.houseColor = "green";
                        break;
                    case "Hufflepuff":
                        element.houseColor = "yellow";
                        break;
                    case "Ravenclaw":
                        element.houseColor = "blue";
                        break;
                }
                element.dateOfBirth = element.dateOfBirth.replaceAll("-", "."); //tutaj poprawiany jest string odnośnie daty urodzenia postaci
                state.displayCharacters.push(element); //dodanie postaci do tablicy wyświetlającej
            });
        },

        setDisplay(state, payload) {
            //mutacja, zmieniająca stan tablicy wyświetlającej
            state.displayCharacters = payload;
        },
    },

    actions: {
        async getAllCharacters(context) {
            //akcja, która asynchronicznie pobiera dane z endpointu a następnie wywołuję mutację 'addToDisplay'
            let data = await axios.get("http://hp-api.herokuapp.com/api/characters");
            context.commit("addToDisplay", data.data);
        },
    },
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
