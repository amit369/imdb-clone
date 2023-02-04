import { useEffect , useState} from "react";
// components
import Header from '../component/common/Header';
import {CategoryMovies} from '../services/api.js';
import { NOWPLAYING_API_URL} from '../constants/constant.js';
import {Box} from '@mui/material';
import Banner from '../component/Banner';

const Home = () => {
     let [movies, setMovies] = useState([]);
     useEffect(()=> {
          const getData = async () => {
           let response = await CategoryMovies(NOWPLAYING_API_URL);
           setMovies(response.results);
          }  
          getData();
     } , [])
return (
    <>
    <Header />
     <Box>
       <Banner movies={movies}/>
    </Box>
    </>
)
}

export default Home;