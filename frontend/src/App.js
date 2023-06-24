import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './components/Add';
import View from './components/View';
import Edit from './components/Edit';
import List from './components/List';

const App = () => {
  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route exact path="/" component={List} />
    //       <Route exact path="/recipes/add" component={Add} />
    //       <Route exact path="/recipes/:id" component={View} />
    //       <Route exact path="/recipes/:id/edit" component={Edit} />
    //     </Routes>
    //   </div>
    // </Router>
  
    <div>
      <List/>
      <Add/>
    </div>
    );
};

export default App;
