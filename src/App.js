import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SignModal from "./components/Modal/SignModal";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <ToastContainer position="bottom-right"/>
     <Header/>
     <Carousel/>
     <Footer/>
     <SignModal/>
    </>
  );
}

export default App;
