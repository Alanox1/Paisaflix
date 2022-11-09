const getHeroData =  async (state) => {
    const res = await fetch("https://paisa-challange.herokuapp.com/api/v1/paisaflix/hero"),
     {data} = await res.json();
      state(data)
}


const getTrailers =  async (state) => {
    const res = await fetch("https://paisa-challange.herokuapp.com/api/v1/paisaflix/trailers"),
     {data} = await res.json();
      state(data)
}

const getFeatured = async (state) => {
    const res = await fetch("https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies"),
     {data} = await res.json();
      state(data)
}
 const getMoviePage = async (id,state) => {
    const res = await fetch(`https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies/${id}`),
      {data} = await res.json();
      state(data)
  }

export  {
    getHeroData,
    getTrailers,
    getFeatured,
   getMoviePage
   
}