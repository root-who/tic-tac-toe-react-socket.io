import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import EntryRoom from "./components/EntryRoom";
import TicTacToe from "./components/TicTacToe";
const io = require('socket.io-client');

const socket = io.connect("http://192.168.0.151:3001");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <EntryRoom socket={socket}/>,
  },
  {
    path: "/room",
    element: <TicTacToe socket={socket}/>,
  }
]);