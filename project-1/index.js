const axios = require('axios');

const Url = 'https://jsonplaceholder.typicode.com/posts/1';

async function fetch() {
  try{
    const response = await axios.get(Url);
    console.log("data ->", response.data);
  }
  catch(error){ 
    console.log("error ->", error.message);
  }
}

fetch();