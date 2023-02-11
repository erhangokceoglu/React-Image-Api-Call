import axios from "axios";

const searchImages = async (term)=>{
    const response = await axios.get("https://api.unsplash.com/search/photos",
    {headers:{
      Authorization :"Client-ID OzwuI7UTj1_2i6_DY9uicnBnjY1Ui9jhny1Xi7ti86I"
    },
    params:{
      query:term
    } 
    })
    debugger;
    return response.data.results;
  };

  export default searchImages;