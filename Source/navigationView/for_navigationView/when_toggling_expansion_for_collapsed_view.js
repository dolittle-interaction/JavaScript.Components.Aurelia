/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { navigationView } from "../navigationView";

describe("when toggling expansion for collapsed view", () => {
    let view = new navigationView()
    view.expanded = false;

    view.toggleExpansion();

    it("should be expanded", () => view.expanded.should.equal.true);
});
