import styled from "styled-components";

const Test = styled.div`
   background-color: #111;
   border-radius: 0.5em;
   color: #fff;
   margin-bottom: 1.5em;
   padding: 0.5em 0.75em;
`;

const TestComponent = ({ name = "world" }) => {
   return <Test>Hello, {name}!</Test>;
};

export default TestComponent;
