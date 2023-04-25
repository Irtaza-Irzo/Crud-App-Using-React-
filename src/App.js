import { BrowserRouter, Routes, Route} from "react-router-dom";
import ToDoList from "./ToDoList";
import Read from "./Read";
import Update from "./Update";

function App() {
  return (
  <>
  <BrowserRouter>
     <Routes>
         <Route path="/" element={<ToDoList/>}></Route>
         <Route path="/read" element={<Read/>}></Route>
         <Route path="/update" element={<Update/>}></Route>
     </Routes>
  </BrowserRouter>
  
  </>
  );
}

export default App;