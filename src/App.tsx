import { useState } from "react";
import { PastebinForm } from "./components/PastebinForm";


function App(): JSX.Element {

  const [paste, setPaste] = useState<Array<string>>([]);
  return (
    <>
    <PastebinForm paste={paste} setPaste={setPaste}/>
    </>
  );
}

export default App;
