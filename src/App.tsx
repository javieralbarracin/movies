import React, { Fragment, useState } from 'react';
import Navbar from './components/Navbar';
import { List } from './pages/movies/List';

export const App= () => {

  return (
    <>
      <Navbar />

      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    </>
  
  );
}


