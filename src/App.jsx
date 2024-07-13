import "./App.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function App() {
  const codeString = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Code Highlight</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

  return (
    <>
      <div className="bg-gray-600">
        <div className="container mx-auto">
          <div className="grid place-items-center h-screen">
            <div className="max-w-2xl min-w-[25rem] bg-[3a404d] rounded-md overflow-hidden">
              <SyntaxHighlighter
                language="html"
                style={atomOneDark}
                customStyle={{ padding: "27px" }}
                wrapLongLines={true}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
