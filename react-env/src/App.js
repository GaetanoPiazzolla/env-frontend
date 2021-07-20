import './App.css';
import {environment} from "./environment";
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Environment backend url: {environment.apiBackendUrl}
        </p>
        <p>
          Environment external integration url: {environment.externalIntegrationUrl}
        </p>
      </header>
    </div>
  );
}

export default App;
