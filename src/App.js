import React, { Component } from "react";
import  "./style.css"
import alface from "./assets/alface.png";
import beterraba from "./assets/beterraba.png";
import cenoura from "./assets/cenoura.png";
import laranja from "./assets/laranja.png";
import limao from "./assets/limao.png";
import manga from "./assets/manga.png";
import tomate from "./assets/tomate.png";

export default class App extends Component {
  state = {
    titulo: "HORTIFRUTI",
    subtitulo: "Vnw",
    compras: [
      {
        produto: `${alface}`
      },
      {
        produto: `${laranja}`
      },
      {
        produto: `${cenoura}`
      },
      {
        produto: `${manga}`
      },
      {
        produto: `${limao}`
      },
      {
        produto: `${beterraba}`
      },
      {
       produto: `${tomate}`
      }
    ]
  };
  render() {
    return (
      <body>
        <header>
          <div>
            <h1>{this.state.titulo}</h1>
            <h2>{this.state.subtitulo}</h2>
          </div>
        </header>
        <main>
          <h3>NOSSOS PRODUTOS</h3>
          <section>
            <div>
            {this.state.compras.map((item)=>(
            <img className="imagens" src={item.produto}/>
            ))}
            </div>
          </section>
        </main>
        <aside>
          <section>
            <div class="carrinho">
              <p>Arraste sua compra para colocar no carrinho</p>
              <p>🛒</p>
            </div>
            <div class="quantidade">
              <p>+</p>
              <p>-</p>
            </div>
          </section>
        </aside>
      </body>
    );
  }
}
