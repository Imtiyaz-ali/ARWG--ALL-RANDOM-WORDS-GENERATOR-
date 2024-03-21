var mrng= require('mrng');
require("./assets/all.js");
require("./assets/animal.js");
require("./assets/anime.js");
require("./assets/fruit.js");
require("./assets/pokemon.js");



function random_words(number=0){
    var random_number = Math.floor(mrng(0,299))

    switch (number) {
        case 0:
            return all_foods[random_number]
            break;

        case 1:
            return Math.floor(animals[random_number]/6)
            break;

        case 2:
            return anime[Math.floor(mrng(0,49))]
            break;

        case 3:
            return fruits[Math.floor(mrng(0,49))]
            break;
        
        case 4:
            return pokemons[Math.floor(mrng(0,100))]
            break;
        default:
            break;
    }

    return "apple"
}

module.exports = random_words;