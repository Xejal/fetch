import React, { Component } from "react";

export default class Fetch extends Component {
    getData = () => {
        fetch('https://acb-api.algoritmika.org/api/transaction ')
        .then(res => res.json())
        .then((data) => console.log(data)) 
            
        
    };

    componentDidMount() {
        this.getData()
    }


  render() {
    return <div></div>;
  }
}
