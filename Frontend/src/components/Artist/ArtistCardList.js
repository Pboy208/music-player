import React from 'react';
import styled from 'styled-components';
import ArtistCard from './ArtistCard';

function ArtistCardList({ exploreArtist }) {
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
