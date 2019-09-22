import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import * as builder from "tns-core-modules/ui/builder";
import { View, Property, CssProperty, Style } from "tns-core-modules/ui/page/page";
import { CSSType } from "tns-core-modules/ui/layouts/layout-base";
import { Label } from "tns-core-modules/ui/label";

export const textProperty = new Property<LetterAvatar, string>({ name: "text", defaultValue: "" });
export const heightProperty = new CssProperty<Style, number>({name: "height", cssName: "height", defaultValue: 50});
export const widthProperty = new CssProperty<Style, number>({name: "width", cssName: "width", defaultValue: 50});
export const borderRadiusProperty = new CssProperty<Style, number>({name: "borderRadius", cssName: "border-radius", defaultValue: 25});
export const backgroundColorProperty = new CssProperty<Style, string>({name: "backgroundColor", cssName: "background-color", defaultValue: ""});
export const fontSizeProperty = new CssProperty<Style, number>({name: "fontSize", cssName: "font-size", defaultValue: 30});
export const colorProperty = new CssProperty<Style, string>({name: "color", cssName: "color", defaultValue: "white"});

@CSSType("LetterAvatar")
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
  stackLayout: StackLayout;
  constructor() {
    super();


    this.stackLayout = new StackLayout();
    this.label = new Label();
    this.stackLayout.orientation = "horizontal";
    this.label.verticalAlignment = "middle";
    this.stackLayout.height = this.height;
    this.label.text = this.text;
    this.stackLayout.width = this.width;
    this.label.width = this.width;
    this.stackLayout.borderRadius = this.borderRadius;
    this.label.color = this.color;
    this.label.fontSize = this.fontSize;
    // @ts-ignore
    this.label.textAlignment = "center";
    if (this.backgroundColor) {
      this.stackLayout.backgroundColor = this.backgroundColor;
    } else {
      this.stackLayout.backgroundColor = this.flatColors[Math.floor(Math.random() *
        this.flatColors.length)];
    }

    this.stackLayout.addChild(this.label);
    this.addChild(this.stackLayout);
  }

  [textProperty.setNative](value: string) {
    this.label.text = value;
  }
  [heightProperty.setNative](value: number) {
    this.stackLayout.height = value;
  }
  [widthProperty.setNative](value: number) {
    this.label.width = value;
    this.stackLayout.width = value;
  }
  [borderRadiusProperty.setNative](value: string) {
    this.stackLayout.borderRadius = value;
  }
  [backgroundColorProperty.setNative](value: string) {
    this.stackLayout.backgroundColor = value;
  }
  [colorProperty.setNative](value: string) {
    // @ts-ignore
    this.label.color = value;
  }
  [fontSizeProperty.setNative](value: number) {
    this.label.fontSize = value;
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
fontSizeProperty.register(LetterAvatar);