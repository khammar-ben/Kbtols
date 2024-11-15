import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import IpExtractor from "./pages/IpExtractor.js";
import ExtractDomains from "./pages/ExtractDomains.js";
import Shufl_U_L from "./pages/Shufl_U_L.js";
import Shufl_Lines from "./pages/Shufl_Lines.js";
import TextToHtml from "./pages/TextToHtml.js";
import CompareInputs from "./pages/CompareInputs.js";

export function App() {

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} errorElement={<h1>SORROY.........</h1>} />
        <Route path='/IpExtractor' element={<IpExtractor />}/>
        <Route path='/ExtractDomains' element={<ExtractDomains />}/>
        <Route path='/Shufl_U_L' element={<Shufl_U_L />}/>
        <Route path='/Shufl_Lines' element={<Shufl_Lines />}/>
        <Route path='/TextToHtml' element={<TextToHtml />}/>
        <Route path='/CompareInputs' element={<CompareInputs />}/>
  
      </Routes>
    </>
  );
}
/*
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h1>SORROY.........</h1>,
    },

    {
      path: "/IpExtractor",
      element: <IpExtractor />,
    },

    {
      path: "/ExtractDomains",
      element: <ExtractDomains />,
    },

    {
      path: "/Check_spf_dmarc",
      // eslint-disable-next-line react/jsx-pascal-case
      element: <CompareInputs />,
    },

    {
      path: "/Shufl_U_L",
      // eslint-disable-next-line react/jsx-pascal-case
      element: <Shufl_U_L />,
    },

    {
      path: "/Shufl_Lines",
      // eslint-disable-next-line react/jsx-pascal-case
      element: <Shufl_Lines />,
    },
    {
      path: "/TextToHtml",
      // eslint-disable-next-line react/jsx-pascal-case
      element: <TextToHtml />,
    },
    {
      path: "/CompareInputs",
      // eslint-disable-next-line react/jsx-pascal-case
      element: <CompareInputs />,
    },
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

}
*/
export default App; // Ensure this line exports App as the default export