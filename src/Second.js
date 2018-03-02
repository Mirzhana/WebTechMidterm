import React, { Component } from "react";
import "./contacts.css";

class Second extends Component {
    constructor(props, context){
        super(props,context);
        this.state = {
            isClicked1  : 'notPressed',
            isClicked2  : 'notPressed',
            isClicked3  : 'notPressed',
            isClicked4  : 'notPressed',
            Total: 0 
                
        };
        this.isActive1 = this.isActive1.bind(this);
        this.isActive2 = this.isActive2.bind(this);
        this.isActive3 = this.isActive3.bind(this);
        this.isActive4 = this.isActive4.bind(this);
  
    }
    isActive1(){
        this.state.Total = this.state.Total + 300;
        this.setState({
            isClicked1 : 'pressed',
        })
    }
    isActive2(){
        this.state.Total = this.state.Total + 100;
        this.setState({
            isClicked2 : 'pressed',
        })
    }

    isActive3(){
        this.state.Total = this.state.Total + 200;
        this.setState({
            isClicked3 : 'pressed',
        })
    }
    
    isActive4(){
        this.state.Total = this.state.Total + 150;
        this.setState({
            isClicked4 : 'pressed',
        })
    }

    
  render() {
    return (
        <div className = "Main" >
            <h1>Products</h1>
            <div className={this.state.isClicked1} onClick={this.isActive1}>Milk 300tg</div>
            <div className={this.state.isClicked2} onClick={this.isActive2}>Bread 100tg</div>
            <div className={this.state.isClicked4} onClick={this.isActive4}>Ice cream 150tg</div>
            <div className={this.state.isClicked3} onClick={this.isActive3}>Candy 200tg</div>
            <h3>Total: {this.state.Total} tg</h3>
        </div> 
       
    );
  }
}
 
export default Second;