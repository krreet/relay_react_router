/**
 * @flow
 * @relayHash fdfb1dc6fa516c4abef8928272e8834e
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Child2_pokemon$ref = any;
type Child_pokemon$ref = any;
export type AppQueryVariables = {| |};
export type AppQueryResponse = {|
  +pokemon: ?{|
    +$fragmentRefs: (Child_pokemon$ref & Child2_pokemon$ref),
  |},
|};
*/

/*
query AppQuery {
  pokemon(name: "Pikachu") {
    ...Child_pokemon
    ...Child2_pokemon
    id
  }
}

fragment Child_pokemon on Pokemon {
  id
  name
  classification
}

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
    v1 = [
      {
        kind: "ScalarField",
        alias: null,
        name: "minimum",
        args: null,
        storageKey: null
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "maximum",
        args: null,
        storageKey: null
      }
    ];
  return {
    kind: "Request",
    operationKind: "query",
    name: "AppQuery",
    id: null,
    text:
      'query AppQuery {\n  pokemon(name: "Pikachu") {\n    ...Child_pokemon\n    ...Child2_pokemon\n    id\n  }\n}\n\nfragment Child_pokemon on Pokemon {\n  id\n  name\n  classification\n}\n\nfragment Child2_pokemon on Pokemon {\n  id\n  image\n  height {\n    minimum\n    maximum\n  }\n  weight {\n    minimum\n    maximum\n  }\n}\n',
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
            {
              kind: "FragmentSpread",
              name: "Child_pokemon",
              args: null
            },
            {
              kind: "FragmentSpread",
              name: "Child2_pokemon",
              args: null
            }
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
          selections: [
            {
              kind: "ScalarField",
              alias: null,
              name: "id",
              args: null,
              storageKey: null
            },
            {
              kind: "ScalarField",
              alias: null,
              name: "name",
              args: null,
              storageKey: null
            },
            {
              kind: "ScalarField",
              alias: null,
              name: "classification",
              args: null,
              storageKey: null
            },
            {
              kind: "ScalarField",
              alias: null,
              name: "image",
              args: null,
              storageKey: null
            },
            {
              kind: "LinkedField",
              alias: null,
              name: "height",
              storageKey: null,
              args: null,
              concreteType: "PokemonDimension",
              plural: false,
              selections: v1
            },
            {
              kind: "LinkedField",
              alias: null,
              name: "weight",
              storageKey: null,
              args: null,
              concreteType: "PokemonDimension",
              plural: false,
              selections: v1
            }
          ]
        }
      ]
    }
  };
})();
node /*: any*/.hash = "c52f244004d4abd3eabc7674702a61b1";
module.exports = node;
