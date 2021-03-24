import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { IoIosArrowUp } from "react-icons/io";

const PushButton = styled.button``;

const useRouterScroll = () => {
   const router = useRouter();
   useEffect(() => {
      const handler = () => {
         window.scrollTo(0, 0);
      };
      router.events.on("routeChangeComplete", handler);
      return () => {
         router.events.off("routerChangeComplete", handler);
      };
   });
};

const scrollToTop = link => {
   const router = useRouter();
   router.push(`/${link}`).then(() => window.scrollTo(0, 0));
};

const PushToTop = () => {
   return (
      <PushButton onClick={useRouterScroll}>
         <IoIosArrowUp />
      </PushButton>
   );
};

export default PushToTop;
