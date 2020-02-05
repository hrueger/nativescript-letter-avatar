import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Property } from "tns-core-modules/ui/page/page";
import { Label } from "tns-core-modules/ui/label";
export declare const textProperty: any;
export declare const heightProperty: Property<LetterAvatar, string | number>;
export declare const widthProperty: Property<LetterAvatar, string | number>;
export declare const borderRadiusProperty: Property<LetterAvatar, number>;
export declare const backgroundColorProperty: Property<LetterAvatar, string>;
export declare const fontSizeProperty: Property<LetterAvatar, number>;
export declare const colorProperty: Property<LetterAvatar, string>;
export declare const marginProperty: Property<LetterAvatar, number>;
export declare const paddingProperty: Property<LetterAvatar, number>;
export declare class LetterAvatar extends GridLayout {
    text: string;
    fontSize: number;
    textAlign: string;
    label: Label;
    private flatColors;
    stackLayout: StackLayout;
    constructor();
}
