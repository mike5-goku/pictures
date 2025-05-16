import axios from "axios";

const searchImage = async(term) => {
    //const url = 'https://api.unsplash.com/search/photos/?client_id=45kxOXjX5YFWzr5PArB9hUUP9gxNBdxvOEgJsAfnRqE'
      const url = 'https://api.unsplash.com/search/photos/?client_id=45kxOXjX5YFWzr5PArB9hUUP9gxNBdxvOEgJsAfnRqE'

    const response = await axios.get(url, {
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImage









/*import axios from "axios";
const searchImages = async(term) => {
//const url = 'https://api.unsplash.com/search/photos/?client_id=45kxOXjX5YFWzr5PArB9hUUP9gxNBdxvOEgJsAfnRqE'       
const url = 'https://api.unsplash.com/search/photos/?client_id=45kxOXjX5YFWzr5PArB9hUUP9gxNBdxvOEgJsAfnRqE'
const response = await axios.get(url ,{
params: {
    query : term
}
})

console.log(response)
return response.data.results
}

export default searchImages*/









