import  {Route,Routes} from "react-router-dom";
import Dashboard from "./components/pages/js/dashboard";
import Education from "./components/pages/js/Education";

function App() {
  return (
    <>
    <Routes>   
    <Route path="/"  element={<Dashboard/>}></Route>
      <Route path="/dashboard/*"  element={<Dashboard/>}></Route>
      
     
    </Routes>
    </>
  );
}

export default App;
