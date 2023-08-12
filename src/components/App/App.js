import React, { Component } from 'react';
import testData from './testData.js';
import './App.css';

import MyName from "../myname.js";
import HeaderComp from "../footercomp.js";
import FooterComp from "../headercomp.js";
import Films from "./films.js"

class App extends Component {


constructor() {
super();
this.state = {
    testDataItem: testData,  
    count: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4}
        ]
           }
this.handleChange = this.handleChange.bind(this)
}

handleChange(thisID) {
    this.setState(prevState => {
        const updatedTodos = prevState.testDataItem.map(todo => {
            if (todo.id === thisID) {
                todo.completed = !todo.completed
            }
            return todo
        })
        return {
            testDataItem: updatedTodos
        }
    })
    
 }

  

  render() {
    const testDataItems=this.state.testDataItem.map(textitem => <Films text={textitem.text} 
        completed={textitem.completed} 
            key={textitem.id} 
            handleChange={() => this.handleChange(textitem.id)}/>)        
         

    return (
      <div>
        <MyName message="This is the main component"/>
        <div className="FilmList">
        
        {testDataItems}

        </div>
        <HeaderComp />
        <FooterComp />
        </div>
    );
  }
}

export default App;
