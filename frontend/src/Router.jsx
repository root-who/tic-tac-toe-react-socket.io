import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import { io } from "socket.io-client";

import EntryRoom from "./components/EntryRoom";
import TicTacToe from "./components/TicTacToe";
const socket = io.connect("http://localhost:3001")

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