

const get = document.querySelector('get');
const quote = document.getElementById('quote');

function joke(){
    fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(function(response) {
    /* convert Stringified JSON response to Javascript Object */
    return response.json();
  }).then(function(data) {
    /* replace innerText of .joke-text with data.joke */
    // extract the joke text
    const joke = data.joke;
    // do the replacement
    quote.innerText = joke;
  
  
})  
}

    // .then(function(data){
        
    //     let quote = Math.floor(Math.random()*data.legth)
    //     document.getElementById('joke').innerText =data[random].text;
    // });
