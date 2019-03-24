/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Child2_pokemon$ref: FragmentReference;
export type Child2_pokemon = {|
  +id: string,
  +image: ?string,
  +height: ?{|
    +minimum: ?string,
    +maximum: ?string,
  |},
  +weight: ?{|
    +minimum: ?string,
    +maximum: ?string,
  |},
  +active: ?string,
  +$refType: Child2_pokemon$ref,
|};
*/

const node /*: ConcreteFragment*/ = (function() {
  var v0 = [
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
    kind: "Fragment",
    name: "Child2_pokemon",
    type: "Pokemon",
    metadata: null,
    argumentDefinitions: [],
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
        selections: v0
      },
      {
        kind: "LinkedField",
        alias: null,
        name: "weight",
        storageKey: null,
        args: null,
        concreteType: "PokemonDimension",
        plural: false,
        selections: v0
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "active",
        args: null,
        storageKey: null
      }
    ]
  };
})();
node /*: any*/.hash = "76f644d31afdbe5907d839c4e50889f8";
module.exports = node;
