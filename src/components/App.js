import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          React-Truffle Boilerplate
        </a>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mr-auto ml-auto">
              <h1>React-Truffle Boilerplate</h1>
              <p>
                Edit <code>src/components/App.js</code> and save to reload.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
