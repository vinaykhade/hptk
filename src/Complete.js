import React, { Component } from "react";

class Complete extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.initAwesomplete();
  }

  initAwesomplete(){
    let input = document.getElementById("autocomplete");
    //use Awesomplete lib
    new Awesomplete(input, {
      list: this.props.selectData,
    });
  }

  render() {
    return(
      <div className="autocomplete-form">
        <p>A simple Autofill Component. Here's a plain list of suggestions</p>
        <input
          className='form-control'
          id={"autocomplete"}
          placeholder="Type 'In'"
          />
      </div>
    )
  }
}


export default Complete;
