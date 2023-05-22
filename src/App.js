import { useRef, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const myRef = useRef()
  const [isVisible, setIsVisible] = useState(false)


  useEffect(() => {
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0]
  
      // console.log(entry);
      setIsVisible(entry.isIntersecting)
      console.log(isVisible);
      
  
    },{
      root: null,
      threshold: 0.4,
      triggerOnce: false,
    } )
  
    observer.observe(myRef.current)
  }, [isVisible])
  
  
  
  return (
    <div className="App bg-[rgb(100,149,237)]" >
        <Header  isVisible={isVisible} />
        <About isVisible={isVisible}  myRef={myRef} />
        <Contact/>
    </div>
  );
}

export default App;
