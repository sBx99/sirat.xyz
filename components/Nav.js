import styled from "styled-components";
import Link from "next/link";
import useSound from "use-sound";

const NavStyles = styled.div`
   position: fixed;
   top: 7.5vh;
   right: 1em;
   z-index: 10;
   backdrop-filter: blur(2px);
   background-blend-mode: luminosity;

   & a {
      filter: drop-shadow(0 0 1px ${({ theme }) => theme.color});
      transition: all 0.25s linear;
      font-family: "Avara", serif !important;
      font-weight: bold;
      font-style: italic;

      :not(:last-child) {
         margin-right: 2.5vw;
      }

      :hover {
         filter: drop-shadow(0 0 15px ${({ theme }) => theme.link.background});
         text-shadow: 0 0 10px ${({ theme }) => theme.link.background},
            0 0 11.5px ${({ theme }) => theme.link.background},
            0 0 13px ${({ theme }) => theme.link.background};
      }
   }

   & span {
      font-style: normal;
   }

   @media (max-width: 768px) {
      top: 5vh;
      right: 5vw;
   }

   @media (max-width: 320px) {
      font-size: 0.25em;
   }
`;

const NavLink = ({ name, emoji }) => {
   const [bite] = useSound("/assets/sounds/bite.mp3");
   var linkName;

   if (name == "home") {
      linkName = "/";
   } else {
      linkName = `/${name}`;
   }

   return (
      <Link to={linkName} href={linkName}>
         <a onClick={bite}>
            {name} <span>{emoji}</span>
         </a>
      </Link>
   );
};

const Nav = () => {
   return (
      <NavStyles>
         <NavLink name="home" emoji="🏠" />
         <NavLink name="blog" emoji="📓" />
         <NavLink name="art" emoji="🎨" />
      </NavStyles>
   );
};

export default Nav;
