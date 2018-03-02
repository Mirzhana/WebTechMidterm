import React, { Component } from "react";
import "./index.css";

class Main extends Component {
    constructor(props, context){
        super(props,context);
        this.state = {
            isClicked1  : 'notPressed',
            isClicked2  : 'notPressed',
            isClicked3  : 'notPressed',
                
        };
        this.isActive1 = this.isActive1.bind(this);
        this.isActive2 = this.isActive2.bind(this);
        this.isActive3 = this.isActive3.bind(this);
  
    }
    isActive1(){
        this.setState({
       
        isClicked1 : 'pressed',
        isClicked2 : 'notPressed',
        isClicked3 : 'notPressed'
        })

    }
    isActive2(){
        console.log("pressed");
        this.setState({
       
        isClicked2 : 'pressed',
        isClicked1 : 'notPressed',
        isClicked3 : 'notPressed'
        })
        
    }
    isActive3(){
        console.log("pressed");
        this.setState({
       
        isClicked3 : 'pressed',
        isClicked1 : 'notPressed',
        isClicked2 : 'notPressed'
        })
    }

    
  render() {
    return (
        <div className = "Main" >
            <button className={this.state.isClicked1} onClick={this.isActive1}>Home</button>
            <button className={this.state.isClicked2} onClick={this.isActive2}>About</button>
            <button className={this.state.isClicked3} onClick={this.isActive3}>Contact</button>
        </div> 
       
    );
  }
}
 
export default Main;