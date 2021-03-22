import styled from "styled-components";

import { Meta } from "@components/Layout";
import NowPlaying from "@components/spotify/NowPlaying";
import TopTracks from "@components/spotify/TopTracks";

const TopTrackWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;

const Spotify = () => {
   return (
      <>
         <Meta title="spotify" desc="spotify" />
         <h1>currently playing...</h1>
         <NowPlaying />
         <br />
         <h1>my top tracks</h1>
         <TopTrackWrapper>
            <TopTracks />
         </TopTrackWrapper>
      </>
   );
};

export default Spotify;
