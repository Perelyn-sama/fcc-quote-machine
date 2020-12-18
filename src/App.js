import React from "react";
import "./styles.css";

import QuoteBox from "./components/QuoteBox";

const bgpics = [
  "https://images.unsplash.com/photo-1586102677053-8d5d06aa7b16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
  "https://images.unsplash.com/photo-1601221018729-15aec0cf430f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1601280336828-fa4d25351fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
  "https://images.unsplash.com/photo-1601202786213-8aeec3445a28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1601202786213-8aeec3445a28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
  "https://images.unsplash.com/photo-1601258166723-ebbde89682a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
  "https://images.unsplash.com/photo-1600950749548-dcdab59b172c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
];

function App() {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
