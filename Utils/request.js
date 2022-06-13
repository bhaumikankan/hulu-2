const API_KEY='1f86fba9e9f53806312d4695b3242003';

export default{
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=1f86fba9e9f53806312d4695b3242003&language=en-US`
    },
    fetchTopRated:{
        title:'Top Rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        title:'Action',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies:{
        title:'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies:{
        title:'Horror',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies:{
        title:'Romance',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery:{
        title:'Mystery',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi:{
        title:'Sci-fi',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern:{
        title:'Westren',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation:{
        title:'Animation',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTv:{
        title:'TV Movies',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
    
}