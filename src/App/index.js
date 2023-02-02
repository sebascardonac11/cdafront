
import './App.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Home } from '../Home';

function App() {

  return (
    <React.Fragment>
      <RenHome>
        <Home 
        />
        
      </RenHome>
    </React.Fragment>
  );
}

function RenHome({ children }) {
  const homeNode = document.createElement('div');
  useEffect(() => {
    document.body.appendChild(homeNode);
    return () => {
      homeNode.remove();
    }
  }, [homeNode]);
  return ReactDOM.createPortal(children, homeNode);
}
export default App;
