/**
 * @flow
 * @relayHash 5b290b346277b0cc06e0c4542598826a
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {| |};
export type AppQueryResponse = {|
  +pokemon: ?{|
    +id: string,
    +name: ?string,
    +active: ?boolean,
    +classification: ?string,
  |},
|};
*/

/*
query AppQuery {
  pokemon(name: "Pikachu") {
    id
    name
    classification
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: "Literal",
        name: "name",
        value: "Pikachu",
        type: "String"
      }
    ],
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null
    },
    v2 = {
      kind: "ScalarField",
      alias: null,
      name: "name",
      args: null,
      storageKey: null
    },
    v3 = {
      kind: "ScalarField",
      alias: null,
      name: "classification",
      args: null,
      storageKey: null
    };
  return {
    kind: "Request",
    operationKind: "query",
    name: "AppQuery",
    id: null,
    text:
      'query AppQuery {\n  pokemon(name: "Pikachu") {\n    id\n    name\n    classification\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: "Fragment",
      name: "AppQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: [],
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "pokemon",
          storageKey: 'pokemon(name:"Pikachu")',
          args: v0,
          concreteType: "Pokemon",
          plural: false,
          selections: [
            v1,
            v2,
            {
              kind: "ScalarField",
              alias: null,
              name: "active",
              args: null,
              storageKey: null
            },
            v3
          ]
        }
      ]
    },
    operation: {
      kind: "Operation",
      name: "AppQuery",
      argumentDefinitions: [],
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "pokemon",
          storageKey: 'pokemon(name:"Pikachu")',
          args: v0,
          concreteType: "Pokemon",
          plural: false,
          selections: [v1, v2, v3]
        }
      ]
    }
  };
})();
node /*: any*/.hash = "b7638f49df28bf699bcb880e9ba6ebb7";
module.exports = node;
