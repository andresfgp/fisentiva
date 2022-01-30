import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import '../assets/styles/routes/App.scss';

const App = (props) => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/home/' />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

