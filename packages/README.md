
# Random Word Generator

This Node.js package allows you to generate random words based on different categories such as all words, animals, anime, fruits, and Pokémon.

## Installation

You can install the package using npm:

```bash
npm install all-random-words
```
## USage

const random_word = require('all-random-words');

// Generate 5 random words from all categories
console.log("Any Random 5 Words:")
for(let i = 0; i < 5; i++) {
    console.log(random_word(0));
}

// Generate 5 random animal names
console.log("Any Random Animal 5 Words:")
for(let i = 0; i < 5; i++) {
    console.log(random_word(1));
}

// Generate 5 random anime titles
console.log("Any Random Anime 5 Words:")
for(let i = 0; i < 5; i++) {
    console.log(random_word(2));
}

// Generate 5 random fruit names
console.log("Any Random Fruit 5 Words:")
for(let i = 0; i < 5; i++) {
    console.log(random_word(3));
}

// Generate 5 random Pokémon names
console.log("Any Random Pokemon 5 Words:")
for(let i = 0; i < 5; i++) {
    console.log(random_word(4));
}

## License
This project is licensed under the MIT License.


Feel free to adjust the content and structure of the `readme.md` file as needed for your project.


