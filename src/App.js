import { useRef, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const navRef = useRef()
  const [isVisible, setIsVisible] = useState(false)


  useEffect(() => {
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0]
  
      // console.log(entry);
      setIsVisible(entry.isIntersecting)
      console.log(isVisible);
      
  
    },{
      rootMargin: '-50px'
    } )
  
    observer.observe(navRef.current)


    return ()=> observer.disconnect()
  }, [isVisible])
  
  
  return (
    <div className="App bg-[rgb(100,149,237)]" >
        <Header  isVisible={isVisible} />
        <About isVisible={isVisible}  navRef={navRef} />
        <Contact/>
    </div>
  );
}

export default App;
