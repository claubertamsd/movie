import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from 'components/Navbar';
import FormPost from "pages/FormPost";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>       
        <Route path="/" element={<Listing />} />        
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>       
        <Route path="/post" element={<FormPost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;