import styled from "styled-components";
import { Meta } from "../components/Layout";
import CenterDiv from "../styles/center";
import CustomImage from "../components/Image";

export const config = { amp: "hybrid" };

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    min-width: 60vw;
`;

const Custom404 = ({ ...props }) => {
    return (
        <>
            <Meta title="404" desc="404 - Page Not Found" />
            <CenterDiv>
                <h1>404 - page not found</h1>
                <FlexRow>
                    <CustomImage
                        src="https://media.giphy.com/media/4E0mUTkx6lpiE/giphy.gif"
                        alt="lol nope"
                        height="100"
                        width="100"
                    />
                    <CustomImage
                        src="https://media.giphy.com/media/4E0mUTkx6lpiE/giphy.gif"
                        alt="lol nope"
                        height="100"
                        width="100"
                    />
                    <CustomImage
                        src="https://media.giphy.com/media/4E0mUTkx6lpiE/giphy.gif"
                        alt="lol nope"
                        height="100"
                        width="100"
                    />
                    <CustomImage
                        src="https://media.giphy.com/media/4E0mUTkx6lpiE/giphy.gif"
                        alt="lol nope"
                        height="100"
                        width="100"
                    />
                    <CustomImage
                        src="https://media.giphy.com/media/4E0mUTkx6lpiE/giphy.gif"
                        alt="lol nope"
                        height="100"
                        width="100"
                    />
                </FlexRow>
                <p>this post doesn't exist. yet.</p>
            </CenterDiv>
        </>
    );
};

export default Custom404;
