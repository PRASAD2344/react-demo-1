import React, { Component } from 'react';
 import './App.css';
 import Person from './Person/Person';

 class App extends Component {

   state = {
     persons: [
       {name: 'Prasad',age: 30},
       {name: 'Pragna',age: 32},
     ],
     showPersons: false
   }

   switchNameHandler = () => {
     this.setState({
       persons: [...this.state.persons.reverse()]
     })
   }

   changeNameFirstRowHandler = (event) => {
    let rows = [...this.state.persons]
    rows[0].name = event.target.value
    this.setState({
      persons: [...rows]
    })
   }

   togglerPersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
   }

   render() {
     const buttonStyle = {
       backgroundColor: 'white',
       font: 'inherit',
       border: '1px solid blue',
       padding: '8px',
       cursor: 'pointer'
     }
     return (
       <div className="App">
        <h1>Hi this is react demo</h1>
        <button 
          onClick={this.togglerPersonsHandler}
          style={buttonStyle}>Toggle Persons
        </button>
        {this.state.showPersons ? 
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click={this.switchNameHandler}
              changed={this.changeNameFirstRowHandler}>My Hobbies: Jogging</Person>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}/>
          </div>
       : null}
      </div>
     );
     //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'This is react App!!'));
   }
 }

 export default App;