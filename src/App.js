import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Rows from "./Rows";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rows
        id_no="1"
        title="Introduction"
        sub="Put your logic to the test with these warmups!"
        fetchURL="api/users?page=2"
      />
      <Rows
        id_no="2"
        title="The Rational Detective"
        sub="Eliminate the impossible and uncover the truth!"
        fetchURL="api/users?page=2"
      />
      <Rows
        id_no="3"
        title="Puzzles and Riddles"
        sub="Even trickier puzzles and the tools you need to solve them."
        fetchURL="api/users?page=2"
      />
      <Rows
        id_no="4"
        title="Multi-Level Thinking"
        sub="If you know that I know that you know... what then?"
        fetchURL="api/users?page=2"
      />
      <Rows
        id_no="5"
        title="Competitive Games"
        sub="What will your opponent do? Logic it out!"
        fetchURL="api/users?page=2"
      />
    </div>
  );
}

export default App;
