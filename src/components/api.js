import axios from "axios";
const searchImages = async(term) =>{
const url = 'https://api.unsplash.com/search/photos/?client_id=EZFOCF_XD5dxji9XxDsDEDe2gVV6JiFMNnWSm5BlFB0'
const response = await axios.get(url ,{
params: {
    query : term
}
})

console.log(response)
return response.data.results
}

export default searchImages
