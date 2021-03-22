import styled from "styled-components";
import useSWR from "swr";

import fetcher from "@lib/fetcher";

const WrapTrack = styled.div`
   width: 200px;
   padding: 1em;
   margin: 1em;
   font-size: 0.75em;
   font-style: normal;
   background: ${({ theme }) => theme.background};
   border: 2px solid ${({ theme }) => theme.color};

   :hover {
      transform: scale(1.05);
      filter: drop-shadow(0 0 5px ${({ theme }) => theme.link.background});

      .arrow {
         display: block;
         font-style: normal;
      }
   }

   & a {
      font-style: normal;

      & * {
         padding: 2px;
         margin: 0;
      }

      & p {
         font-family: "AUTHENTIC Sans", serif;
      }

      & .arrow {
         display: none;
         transition: all 2.5s linear;
      }
   }
`;

const Go2Track = styled.span`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`;

const Track = track => {
   return (
      <WrapTrack>
         <a href={track.songUrl} target="_blank" rel="noopener noreferrer">
            <Go2Track>
               <p>{track.ranking}</p>
               <span className="arrow">↗️</span>
            </Go2Track>
            <h3>{track.title}</h3>
            <p>{track.artist}</p>
         </a>
      </WrapTrack>
   );
};

const TopTracks = () => {
   const { data } = useSWR("/api/spotify/top-tracks", fetcher);

   if (!data) {
      return <p>tracks can't be found</p>;
   }

   return data.tracks.map((track, index) => (
      <Track ranking={index + 1} key={track.songUrl} {...track} />
   ));
};

export default TopTracks;
