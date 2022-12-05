import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

// const HomePage = styled.div`
//   display: flex;
//   flex-direction: wrap;
//   justify-content: center;



const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(
        () => {
            async function getMovieData() {
                const response = await fetch('http://localhost:8081/movies');
                const data = await response.json();
                setMovies(data);
            }
            getMovieData();
        }, [])

    console.log({ movies })


    return (
        <>
        </>
    )
}

export default Home;