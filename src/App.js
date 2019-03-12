import React, { Component } from "react";
import { QueryRenderer, graphql, commitLocalUpdate } from "react-relay";
import Toggle from "react-toggle";
import environment from "./createRelayEnvironment";
import "react-toggle/style.css";
import "./App.css";
import Child from "./Child";

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            pokemon(name: "Pikachu") {
              id
              name
              active
              classification
            }
          }
        `}
        variables={{}}
        render={({ errors, props }) => {
          console.log(props);
          if (props) {
            return (
              <div className="App">
                <header className="App-header">
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
                </header>
                <p className="App-intro">
                  Contrived relay example, the active status is not saved, only
                  toggled in the relay store.
                </p>

                <Child pokemon={props.pokemon} />
              </div>
            );
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default App;
