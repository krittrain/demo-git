import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Home from './Home';
import { render } from '@testing-library/react';
this is kritika
class App extends Component{ 
  state = {
    persons:[
      {name:'manish',age:11,prof:'logo tech'},
      {name:'kritika',age:12,prof:'design tech'},
      {name:'kapil',age:13,prof:'ui tech'}
    ],
    showcomponent:false
  }

  // changeValue = () => {
  //   this.setState({
  //     persons:[
  //       {name:'manish ji',age:31,prof:'.net Developer'},
  //       {name:'kritika ji',age:32,prof:'React Developer'},
  //       {name:'kapil kumar',age:18,prof:'HTML developer'}
  //     ]
  //   })
  // }
  changestatehandler = ()=> {
    this.setState({
      showcomponent:!this.state.showcomponent
    })
  }

  changeNameHandler = (kritika) =>{
    this.setState({
      persons:[
        {name:kritika,age:31,prof:'.net Developer'},
        {name:'kritika ji',age:32,prof:'React Developer'},
        {name:'kapil kumar',age:18,prof:'HTML developer'}
      ]
    })
  }
  
  Kamal SIngh

  nameChangehandler = (event) =>{
    this.setState({
      persons:[
        {name:'kritika1',age:31,prof:'.net Developer'},
        {name:event.target.value,age:32,prof:'React Developer'},
        {name:'kapil kumar1',age:18,prof:'HTML developer'}
      ]
    })

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.changeNameHandler.bind(this,"manish ji")}>click here</button>
          <br />
          <button onClick={this.changestatehandler}>show me</button>
          <img src={logo} className="App-logo" alt="logo" />
          {
              this.state.showcomponent 
            ? 
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
                prof={this.state.persons[0].prof}
              />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                prof={this.state.persons[1].prof} 
                click={this.changeNameHandler.bind(this,"manish kumar")}
                changed={this.nameChangehandler}
              >

              </Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} 
                prof={this.state.persons[2].prof}
              > 
                  i m from delhi .
              </Person> 
              </div>
            : 
              null
          }
        
        </header>
      </div>
    );
  }
}
 

export default App;
