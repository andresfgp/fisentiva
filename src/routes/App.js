import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import '../assets/styles/routes/App.scss';
import Home from '../containers/home/Home';

const App = (props) => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/home' element={<Home />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

