import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark, shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const JavascriptCode = ({ codeString }) => {
    return (
        <SyntaxHighlighter language="javascript" style={a11yDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

export const PythonCode = ({ codeString }) => {
    return (
        <SyntaxHighlighter language="python" style={shadesOfPurple}>
            {codeString}
        </SyntaxHighlighter>
    );
};
