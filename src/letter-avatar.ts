import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import * as builder from "tns-core-modules/ui/builder";
import { View, Property, CssProperty, Style } from "tns-core-modules/ui/page/page";
import { CSSType } from "tns-core-modules/ui/layouts/layout-base";
import { Label } from "tns-core-modules/ui/label";

export const textProperty = new Property<LetterAvatar, string>({ name: "text", defaultValue: "" });
export const heightProperty = new CssProperty<Style, number>({name: "height", cssName: "height", defaultValue: 50});
export const widthProperty = new CssProperty<Style, number>({name: "width", cssName: "width", defaultValue: 50});
export const borderRadiusProperty = new CssProperty<Style, number>({name: "borderRadius", cssName: "border-radius", defaultValue: 25});
export const backgroundColorProperty = new CssProperty<Style, string>({name: "backgroundColor", cssName: "background-color", defaultValue: ""});
export const paddingTopProperty = new CssProperty<Style, number>({name: "paddingTop", cssName: "padding-top", defaultValue: 5});
export const fontSizeProperty = new CssProperty<Style, number>({name: "fontSize", cssName: "font-size", defaultValue: 30});
export const verticalAlignProperty = new CssProperty<Style, string>({name: "verticalAlign", cssName: "vertical-align", defaultValue: "middle"});
export const textAlignProperty = new CssProperty<Style, string>({name: "textAlign", cssName: "text-align", defaultValue: "center"});
export const colorProperty = new CssProperty<Style, string>({name: "color", cssName: "color", defaultValue: "white"});

@CSSType("LatterAvatar")
export class LetterAvatar extends GridLayout {
  text: string;
  fontSize: number;
  textAlign: string;
  label: Label;
  private flatColors: string[] = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#f39c12",
    "#d35400",
    "#c0392b",
];
  constructor() {
    super();

    this.label = new Label();
    this.label.height = this.height;
    this.label.text = this.text;
    this.label.width = this.width;
    this.label.borderRadius = this.borderRadius;
    this.label.color = this.color;
    this.label.fontSize = this.fontSize;
    this.label.paddingTop = this.paddingTop;
    // @ts-ignore
    this.label.textAlignment = this.textAlign;
    if (this.backgroundColor) {
      this.label.backgroundColor = this.backgroundColor;
    } else {
      this.label.backgroundColor = this.flatColors[Math.floor(Math.random() *
        this.flatColors.length)];
    }
    this.addChild(this.label);
  }

  [textProperty.setNative](value: string) {
    this.label.text = value;
  }
}

textProperty.register(LetterAvatar);
// @ts-ignore
heightProperty.register(LetterAvatar);
// @ts-ignore
widthProperty.register(LetterAvatar);
// @ts-ignore
borderRadiusProperty.register(LetterAvatar);
// @ts-ignore
backgroundColorProperty.register(LetterAvatar);
// @ts-ignore
colorProperty.register(LetterAvatar);
// @ts-ignore
paddingTopProperty.register(LetterAvatar);
// @ts-ignore
textAlignProperty.register(LetterAvatar);
// @ts-ignore
verticalAlignProperty.register(LetterAvatar);
// @ts-ignore
fontSizeProperty.register(LetterAvatar);