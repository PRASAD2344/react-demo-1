import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = () => {

  const [personsState,setPersonsState] = useState({
    persons: [
      {name: 'Prasad',age: 30},
      {name: 'Pragna',age: 32},
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Pragna',age: 32},
        {name: 'Prasad',age: 30},
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi this is react demo</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Jogging</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
    </div>
  );
}

export default app;
