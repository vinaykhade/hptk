import React, { Component } from "react";
import Complete from './Complete';
import Awesomplete from 'Awesomplete';

class Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectData: ["France", "Germany", "England", "Autralia", "Austria", "Finland", "India", "Barbados", "Belarus","Belgium","Belize"]
    };
  }

  render(){
    return (
      <div>
        <Complete
          selectData={this.state.selectData}
        />
      </div>
    );
  }
}

export default Form;
