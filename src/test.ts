import { confirmationFactory } from "WoltLabSuite/Core/Component/Confirmation";

const confirmation = confirmationFactory().custom("test");

// Trying to import this using the auto complete of VSCode:
//                     dialogFactory
//
// will yield this import:
// import { dialogFactory } from "@woltlab/wcf/ts/WoltLabSuite/Core/Component/Dialog";

// Notice how the import in line 1 (which uses an alias)
// works perfectly fine and is accepted by both VSCode
// and the TypeScript compiler.
