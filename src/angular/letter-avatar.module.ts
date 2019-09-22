import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { DIRECTIVES } from "./letter-avatar.directives";

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
})
export class LetterAvatarModule { }

registerElement("LetterAvatar", () => require("nativescript-letter-avatar").LetterAvatar);