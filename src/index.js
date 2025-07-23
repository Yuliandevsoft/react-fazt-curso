import React from "react";
import ReactDOM from "react-dom/client";
import { Greetings, UserCard } from "./Greetings";
import { Button } from "./Button_Defaultprops";
import { TaskCard } from "./Task";
import { Saludar } from "./SaludarClassComponente";

const root = ReactDOM.createRoot(document.getElementById("root"));

{
  /* funcion por fuera del event handler onChange */
}
const handleChange = (evento) => {
  console.log(evento.target.value);
};

root.render(
  <>
    <TaskCard ready={true} />
    <Saludar />
    <Button text={"saludar"} />

    {/* usando event handler onChange */}
    <input id="hola" onChange={handleChange} />

    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("enviado");
      }}
    >
      <h1>Registro de usuario</h1>

      <button>Enviar</button>
    </form>

    {/* <Button text ='click me'/>
  <Button text = 'Pagar'/>
  <Button text = 'pulsar' name='Joe'/>
   */}

    {/* <UserCard
      name="Ryan Rey"
      amount={3000}
      married={true}
      point={[99, 33.5, 77.8, 22.2]}
      address={{ street: "123 main", city: "New York" }}
      greet={function() {alert('Hello')}}
    />
    <UserCard
          name="Yulian Rafael"
      amount={10000}
      married={false}
      point={[22, 31.5, 99.8, 29.2]}
      address={{ street: "123 Avenue", city: "New York" }} 
      
      />
      */}
  </>
);
