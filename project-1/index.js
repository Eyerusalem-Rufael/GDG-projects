const axios = require('axios');

const Url = 'https://api.stackexchange.com/2.2/questions?site=stackoverflow';

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