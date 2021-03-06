># ⚠ Please use [`@schoolsquirrel/letter-avatar`](https://github.com/SchoolSquirrel/nativescript-plugins/tree/main/packages/letter-avatar)


## nativescript-letter-avatar

[![Build](https://github.com/hrueger/nativescript-letter-avatar/workflows/Build/badge.svg)](https://github.com/hrueger/nativescript-letter-avatar/actions) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/hrueger/nativescript-letter-avatar/blob/master/LICENSE) [![Maintenance](https://img.shields.io/badge/Maintained-yes-green.svg)](https://github.com/hrueger/nativescript-letter-avatar/graphs/commit-activity) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/hrueger/nativescript-letter-avatar/)

With this plugin you can create beautiful looking letter avatars in your nativescript app!

![picture 1](./screenshots/01.jpg)

## Installation

Install the plugin from using `tns plugin add nativescript-letter-avatar`.


## Usage 
### NativeScript Core:
Define the namespace
```xml
<Page class="page"
    loaded="pageLoaded"
    navigatingTo="onNavigatingTo" 
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:ns="nativescript-letter-avatar">
```
Use the plugin:
```xml
<ns:LetterAvatar id="myAvatar" text="AB"></ns:LetterAvatar>
```

You can also add custom styles:
```html
<ns:LetterAvatar color="blue" padding="5" borderRadius="7" id="myAvatar" text="AB"></ns:LetterAvatar> 
```

> Unfortunately, CSS properties are not supported.

For more info and examples check out the demo folder.

### Angular Version:

In your `app.module.ts` include the library like so:
```typescript
import { LetterAvatarModule } from "nativescript-letter-avatar/angular";
```
and add it to the imports array:
```typescript
@NgModule({
    bootstrap:  [
        ...
    ],
    declarations: [
        ...
    ],
    imports: [
        ...
        LetterAvatarModule, // <--- add this here
    ],
    schemas: [
        ...
    ],
})
export class AppModule { }
```

The use it in your .html file:
```html
<LetterAvatar text="AB"></LetterAvatar>
```

You can add custom styles:
```html
<LetterAvatar color="blue" padding="5" borderRadius="7" text="AB"></LetterAvatar>
```

> Unfortunately, CSS properties are not supported.

For more info and examples check out the [demo](./demo) and the [demo-angular](./demo-angular) folder.


## License

MIT
