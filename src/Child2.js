import React, { Component } from "react";
import { QueryRenderer, graphql, commitLocalUpdate } from "react-relay";
import Toggle from "react-toggle";
import environment from "./createRelayEnvironment";
import "react-toggle/style.css";
import "./App.css";

import { createFragmentContainer } from "react-relay";
// import type { Child2_pokemon } from "./__generated__/Child_pokemon.graphql";
// type Props = {
//   pokemon: Child_pokemon
// };
class Child2 extends Component {
  render() {
    const { props } = this;
    if (this.props) {
      console.log("props form Child2", this.props);
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
            Contrived relay Child2 example, the active status is not saved, only
            toggled in the relay store.
          </p>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default createFragmentContainer(
  Child2,

  graphql`
    # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
    fragment Child2_pokemon on Pokemon {
      id
      image
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
      active
    }
  `
);
