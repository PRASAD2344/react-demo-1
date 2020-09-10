import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium'

 class App extends Component {

   state = {
     persons: [
       {name: 'Prasad',age: 30},
       {name: 'Pragna',age: 32},
     ],
     showPersons: false
   }
   
   nameChangedHandler = (event,index) => {

    let newName = event.target.value

    let person = {...this.state.persons[index]}
    person.name = newName

    let persons = [...this.state.persons]
    persons[index] = person

    this.setState({
      persons: persons
    })

   }

   deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({
      persons: persons
    })
   }

   togglerPersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
   }

   render() {

     const buttonStyle = {
       backgroundColor: 'green',
       color: 'white',
       font: 'inherit',
       border: '1px solid blue',
       padding: '8px',
       cursor: 'pointer',
       ':hover': {
         backgroundColor: 'lightgreen',
         color: 'black',
       }
     }

     let persons = null;
     if(this.state.showPersons){
       buttonStyle.backgroundColor = 'red';
       buttonStyle[':hover'] = {
         backgroundColor: 'salmon',
         color: 'black'
       }
       persons = (
         <div>
           {this.state.persons.map((person,index) => {
             return <Person 
              key={index}
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event,index)}
              click={() => this.deletePersonsHandler(index)}/>
           })}
        </div>
       )
     }

     let classes = [];

     if(this.state.persons.length <= 2){
       classes.push('red');
     }
     if(this.state.persons.length <= 1){
      classes.push('bold');
     }

     return (
       <StyleRoot>
        <div className="App">
          <p className={classes.join(' ')}>Hi this is react demo</p>
          <button 
            onClick={this.togglerPersonsHandler}
            style={buttonStyle}>Toggle Persons
          </button>
          {persons}
        </div>
       </StyleRoot>
     );

     //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'This is react App!!'));
   }
 }

 export default Radium(App);