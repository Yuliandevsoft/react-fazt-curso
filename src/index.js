import React from "react";
import ReactDOM from "react-dom/client";
import { Greetings, UserCard } from "./Greetings";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
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

  </>
);
