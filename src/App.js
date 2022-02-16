import React, { Component } from "react";
import "./App.css";
import  Hamburguer from "./assets/hamburguer.jpg";
import  Laranja from "./assets/laranja.png";
import Bolo from "./assets/bolo.jpg";
import  Melancia from "./assets/melancia.jpg";
import  Pera from "./assets/pera.png";
import  Sorvete from "./assets/sorvete.jpg";

class contador extends Component {

  state = {
    numero: 0
  };

  add = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };
  
  remover = () => {
    if(this.state.numero > 0){
      this.setState({
        numero: this.state.numero - 1
      })
    }
  }
  
  clear = () => {
    this.setState({
      numero: 0
    })
  }
  
    render() {
      return (
        <div className="contain">
          <h1>Pou Contador</h1>
          <h2>{this.state.numero}</h2>
          <img src={Hamburguer} class="box-ham" alt="hamburguer"/>
          <img src={Laranja} class="box-orange" alt="laranja"/>
          <img src={Bolo} class="box-cake" alt="bolo"/>
          <img src={Melancia} class="box-watermelon" alt="melancia"/>
          <img src={Pera} class="box-pear" alt="pera"/>
          <img src={Sorvete} class="box-icecream" alt="sorvete"/>
          <div className="box">
          <div className="box-pou"></div>
          <div className="box-eye"></div>
          <div className="intro-eye"></div>
          <div class="contain-intro"></div>
          <button onClick={this.add}>+</button>
          <button onClick={this.remover}>-</button>
          </div>
          <div className="intro-clear">
          <button onClick={this.clear}>C</button>
          </div>
          </div>
      );
    }
  }
  
  export default contador;