import { Meta } from "@components/Layout";
import CenterDiv from "@styles/center";

const Error = ({ statusCode }) => {
   return (
      <>
         <Meta title="500" desc="500 - Page Error" />
         <CenterDiv>
            <h1>error 500 - oops!</h1>
            <p>
               {statusCode
                  ? `It seems like an error, ${statusCode}, occurred on our side (the server)`
                  : "It seems like an error has occured on your side. Reload this page or check your connection!"}
            </p>
         </CenterDiv>
      </>
   );
};

Error.getInitialProps = ({ res, err }) => {
   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
   return { statusCode };
};

export default Error;
