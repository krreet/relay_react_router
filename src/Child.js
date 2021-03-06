import React, { Component } from "react";
import { QueryRenderer, graphql, commitLocalUpdate } from "react-relay";
import Toggle from "react-toggle";
import environment from "./createRelayEnvironment";
import "react-toggle/style.css";
import "./App.css";
import Child2 from "./Child2";

import { BrowserRouter, Route } from "react-router-dom";
import { createFragmentContainer } from "react-relay";
// import type { Child_pokemon } from "./__generated__/Child_pokemon.graphql";
// type Props = {
//   pokemon: Child_pokemon
// };
class Child extends Component {
  render() {
    const { props } = this;
    if (this.props) {
      console.log("props form child", this.props);
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
            Contrived relay CHILD example, the active status is not saved, only
            toggled in the relay store.
          </p>
          <Route
            path="/child/child2"
            render={() => <Child2 pokemon={this.props.sprops.pokemon} />}
          />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default createFragmentContainer(
  Child,

  graphql`
    # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
    fragment Child_pokemon on Pokemon {
      id
      name
      active
      classification
    }
  `
);
