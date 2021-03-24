import styled from "styled-components";
import useSWR from "swr";

import fetcher from "@lib/fetcher";

// Styled Video Player
const DataWrap = styled.div`
   transition: all 0.5s ease-in-out;
   filter: drop-shadow(0 0 5px ${({ theme }) => theme.selection});

   :hover {
      cursor: pointer;
      transform: perspective(1000px) rotateX(20deg) rotateY(20deg) rotateZ(-15deg);
      filter: drop-shadow(-2.5px 5px 5px ${({ theme }) => theme.selection});
   }
`;

const Player = styled.div`
   display: flex;
   flex-direction: row;
   width: 20em;
   margin: 0 2.5vw;
   padding: 0.5em;
   height: 8.5em;
   border-radius: 10px;
   background: ${({ theme }) => theme.background};
`;

const AlbumImage = styled.div`
   height: 7.5em;
   width: 7.5em;
   box-shadow: inset 0 0 10px ${({ theme }) => theme.background};
   background: linear-gradient(to bottom right, var(--purple), var(--pink)),
      url(${props => props.imgUrl}), url("/assets/glitch/glitch.gif?w=125&h=125&q=50"),
      url(${props => props.imgUrl}), url("/assets/glitch/vhs.gif?w=125&h=125&q=50");
   background-size: cover;
   background-blend-mode: hue, screen, color-burn, lighten;
   filter: brightness(1.1) contrast(0.75) saturate(1.25);
   opacity: 0.95;
`;

const SongInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: left;
   font-style: normal;

   margin-left: 0.5em;
   width: 11.5em;
   min-height: 4em;
   max-height: 7.5em;
   overflow: hidden;

   & * {
      margin: 0;
      padding: 0;
   }

   .song-title,
   .song-artist,
   .song-album {
      margin: 2.5px 0;
      overflow: hidden;
   }

   .song-title {
      font-size: 25px;
   }

   .song-artist {
      font-weight: 900;
   }

   .song-album {
      font-weight: normal;
   }

   .song-artist,
   .song-album {
      font-size: 15px;
      color: #7d7d7d;
      font-family: "AUTHENTIC Sans", sans-serif;
   }
`;

const NowPlaying = () => {
   const { data } = useSWR("/api/spotify/now-playing", fetcher);

   if (data?.isPlaying) {
      return (
         <DataWrap>
            <a href={data.songUrl} target="_blank" rel="noopener noreferrer">
               <Player>
                  <AlbumImage imgUrl={`${data.albumImageUrl}?w=125&h=125&q=50`}></AlbumImage>
                  <SongInfo>
                     {/**/}
                     <h1 className="song-title">{data.title}</h1>
                     <h1 className="song-artist">{data.artist}</h1>
                     <p className="song-album">{data.album}</p>
                  </SongInfo>
               </Player>
            </a>
         </DataWrap>
      );
   } else {
      return (
         <>
            <p>not playing</p>
         </>
      );
   }
};

export default NowPlaying;
