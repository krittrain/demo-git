import React, { Component } from 'react'
import Paragraph from './Paragraph';
import Button from './Button';
import ButtonValue from './ButtonValue';
import Input from './Input';

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
             level1:true,
             level2:false,
             level3:false,
             level4:false,
             paragraphvalue :''

        }
    }
    ChangeHandler = (a) => {
       if(a==='level2'){
          this.setState(
            {
                level1:false,
                level2:true,
                level3:false,
                level4:false,
            }
          )
       }
      if(a==='level3')
     {
        this.setState(
            {
                level1:false,
                level2:false,
                level3:true,
                level4:false
            }         
          );
       }
       if(a==='level4')
       {
        this.setState(
            {
                level1:false,
                level2:false,
                level3:false,
                level4:true
            }
        );
       }
       if(a==='level1')
       {
        this.setState(
            {
                level1:true,
                level2:false,
                level3:false,
                level4:false
            }
          );
        }
    }  
    ChangeValueHandler = (event) =>{
        this.setState(
            {
         paragraphvalue: event.target.value
            }
        )
    }
    ChangeClick = () =>{

        console.log("Clicked")
    }
    render() {
        return (
            <div>
               <Paragraph value = {this.state.paragraphvalue}/>
               <Input
                    type = "text"
                    name = "newvalue"
                    change = {this.ChangeValueHandler}
                />
                <Input
                    type = "button"
                    name = "newpassword"
                    value = "submit"
                    click = {this.ChangeClick}
                />
               <br/>
               <Button click = {this.ChangeHandler.bind(this,'level1')} value = 'Level1'/>
               <Button click = {this.ChangeHandler.bind(this,'level2')}value = 'Level2'/>
               <Button click = {this.ChangeHandler.bind(this,'level3')}value = 'Level3'/>
               <Button click = {this.ChangeHandler.bind(this,'level4')}value = 'Level4'/>
               {this.state.level1?<ButtonValue value = 'level 1 is easy'/>:null}
               {this.state.level2?<ButtonValue value = 'Level 2 is moderate'/>:null}
               {this.state.level3?<ButtonValue value = 'Level 3 is difficult'/>:null}
               {this.state.level4?<ButtonValue value = 'Level 4 is very difficult'/>:null}
            </div>
        )
    }
}
export default Home








