import { useState } from "react";
import "./App.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function App() {
  const [copy, setCopy] = useState(false);

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
            <div className="max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
              <div className="flex justify-between items-center px-4 text-gray-50 text-xs">
                <p className="text-sm">HTML</p>

                {copy ? (
                  <button className="py-1 gap-1 inline-flex items-center">
                    <span className="mt-1 text-base">
                      <ion-icon name="checkmark-outline"></ion-icon>
                    </span>
                    Copied!
                  </button>
                ) : (
                  <button
                    className="py-1 gap-1 inline-flex items-center"
                    onClick={() => {
                      navigator.clipboard.writeText(codeString);
                      setCopy(true);
                      setTimeout(() => {
                        setCopy(false);
                      }, 3000);
                    }}
                  >
                    <span className="mt-1 text-base">
                      <ion-icon name="clipboard-outline"></ion-icon>
                    </span>
                    Copy code
                  </button>
                )}
              </div>
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
