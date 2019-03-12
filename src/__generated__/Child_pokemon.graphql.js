/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Child_pokemon$ref: FragmentReference;
export type Child_pokemon = {|
  +id: string,
  +name: ?string,
  +active: ?string,
  +classification: ?string,
  +$refType: Child_pokemon$ref,
|};
*/

const node /*: ConcreteFragment*/ = {
  kind: "Fragment",
  name: "Child_pokemon",
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
      name: "name",
      args: null,
      storageKey: null
    },
    {
      kind: "ScalarField",
      alias: null,
      name: "active",
      args: null,
      storageKey: null
    },
    {
      kind: "ScalarField",
      alias: null,
      name: "classification",
      args: null,
      storageKey: null
    }
  ]
};
node /*: any*/.hash = "2b65d86c9022bf0bf54e424565a56299";
module.exports = node;
