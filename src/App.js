import React, { Component } from "react";
import './assets/stylesheets/main.scss';
import Form from './Form';
import WriteTweet from './WriteTweet';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form />
        <WriteTweet />
      </div>
    );
  }
}

export default App;
