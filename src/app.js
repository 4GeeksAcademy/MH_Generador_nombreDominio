/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['el', 'La','Los','ellos','su'];
  let adj = ['Gran', 'Grande','Rojo','Chicos','Gordos'];
  let noun = ['Comilones', 'Bestias','Starks','Salchichas','Peloscrespos'];
  let dominios =['com','es','dev','info','io'];
  
  for(index1 in pronoun){
      for(index2 in adj){
          for(index3 in noun){
              for(index4 in dominios){
                  console.log(`${pronoun[index1]}${adj[index2]}${noun[index3]}.${dominios[index3]}`);
              }
              
          }
      }
  }
};
