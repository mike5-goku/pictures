import axios from "axios";
const searchImages = async(term) =>{

    const response = await axios.get('http://www.omdbapi.com/', {
               params: {
                    apikey: '40a83d1b',
                    s: term
                    }
              })
            

//const url = 'https://api.unsplash.com/search/photos/?client_id=40a83d1b'
//const response = await axios.get(url ,{
//params: {
 //   query : term
//}
//})

console.log(response)
return response.data.results
}

export default searchImages


