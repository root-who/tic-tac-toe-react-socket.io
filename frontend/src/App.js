import React, { useState } from 'react'
import EntryRoom from './components/EntryRoom';
import TicTacToe from './components/TicTacToe';
import GlobalStyle from './globalStyles';
import io from 'socket.io-client'
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';



function App() {
  
   return (
    <>
      <GlobalStyle/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
