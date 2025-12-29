import { useState } from 'react';
import './App.css';
import HireMe from './components/HireMe';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import Main from './pages/Main';

function App() {
  const [btnFix, setBtnFix] = useState(false)
  const [isHire, setIsHire] = useState(false)

  const handleHireClick = () => {
    setIsHire(!isHire)
  }

  function scrollBtnFix() {
    if (window.scrollY >= 300) {
      setBtnFix(true)
    }
    else {
      setBtnFix(false)
    }
  }
  window.addEventListener("scroll", scrollBtnFix)
  return (
    <>
      <div className="montseraf relative">
        <NavBar isHire={isHire} handleHireClick={handleHireClick} />
        <div className="container min-w-full">
          {
            !isHire ?
              <Main /> :
              <HireMe handleHireClick={handleHireClick} />
          }
          <div className={`fixed bottom-10 left-10 ${btnFix ? '' : 'hidden'}`}>
            <ScrollToTop />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
