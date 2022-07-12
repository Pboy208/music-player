import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArtistCard from './ArtistCard';

function ArtistCardList() {
    const [ exploreArtist, setExploreArtist ] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch("http://localhost:8888/song/explore/artist", requestOptions)
        .then((response) => response.json())
        .then((result) => result.data.map((_val, index, array) => array[array.length - 1 - index]))
        .then((result) => setExploreArtist(result))
        .catch((error) => console.log("error", error));
    }, []);
    
    if (!exploreArtist) return null;

    const filterResult = exploreArtist.filter((artist) => artist.type === 0);

    return (
        <Wrapper className='Grid Grid--smallGutter'>
            {filterResult.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default React.memo(ArtistCardList);
