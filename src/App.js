import React, { Component } from "react";
import { QueryRenderer, graphql, commitLocalUpdate } from "react-relay";
import Toggle from "react-toggle";
import environment from "./createRelayEnvironment";
import "react-toggle/style.css";
import "./App.css";
import Child from "./Child";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            pokemon(name: "Pikachu") {
              ...Child_pokemon
              ...Child2_pokemon
            }
          }
        `}
        variables={{}}
        render={({ errors, props }) => {
          console.log(props);
          if (props) {
            return (
              <BrowserRouter>
                <div className="App">
                  {/* <header className="App-header">
                  <Toggle
                    checked={props.pokemon.active === "activated" || false}
                    onChange={() => {
                      commitLocalUpdate(environment, store => {
                        const record = store.get(props.pokemon.id);
                        const active = record.getValue("active");

                        console.log(active);

                        active === "activated"
                          ? record.setValue("unactivated", "active")
                          : record.setValue("activated", "active");
                      });
                    }}
                    count={5}
                  />
                  <h1 className="App-title">{props.pokemon.name}</h1>

                  <h1 className="App-title">{props.pokemon.active}</h1>
                </header> */}
                  <p className="App-intro">
                    Contrived relay example, the active status is not saved,
                    only toggled in the relay store.
                  </p>

                  {/* <Route path='/child' render={() => <Child sprops={props}  pokemon={props.pokemon} />}/> */}

                  <Child pokemon={props.pokemon} sprops={props} />
                </div>
              </BrowserRouter>
            );
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default App;
