//need to require packages for dependencies
const PORT = 8000 //server will run on port XXXX
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');


// Initialize Express app and store it in a variable
const app = express()

// URL to send HTTP request to
const url = 'https://www.serebii.net/heartgoldsoulsilver/johtodex.shtml'

axios(url) //returns promise
    .then(response => {
        // Load HTML into cheerio
        const html= response.data //chaining // gives response
        const $ = cheerio.load(html)

        // Initialize empty array to store Pokemon names
        let pokemon = []

        // Find all elements with specified CSS selector and extract text content
        $('.dextable tr').each(function() {

            const name = $(this).find('a').text()
            const number = $(this).text()
            pokemon.push({name})
            
        
        })
        pokemon = pokemon.filter(({name, number}) => name !== '' /* && number !== ''*/ ); // only keep non-empty elements
        console.log(pokemon)
    }) 
    .catch(err => console.log(err))
 

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`)) 
// listen out for port that we decide