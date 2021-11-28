import * as C from './StyleApp';
import Footer from './Components/Footer';
import HomeSection from './Components/HomeSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContext } from './Context/UserContext';
import Questions from './Components/Questions/';

function App() {
  return (
    <GlobalContext>
      <C.App>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomeSection />} />
            <Route path="/questions/*" element={<Questions />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </C.App>
    </GlobalContext>
  );
}

export default App;
