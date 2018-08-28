# react-native-action-tips

[![npm](https://img.shields.io/npm/v/react-native-action-tips.svg?style=flat-square)](https://www.npmjs.com/package/react-native-action-tips)
[![npm licence](http://img.shields.io/npm/l/react-native-action-tips.svg?style=flat-square)](https://npmjs.org/package/react-native-action-tips)
[![npm downloads](http://img.shields.io/npm/dt/react-native-action-tips.svg?style=flat-square)](https://npmjs.org/package/react-native-action-tips)

Extremely simple tooltip popup written in Javascript for React Native.

  <img align="left" src="https://raw.githubusercontent.com/LukeBrandonFarrell/open-source-images/master/react-native-action-tips/ios.png" width="45%" />
  <img src="https://raw.githubusercontent.com/LukeBrandonFarrell/open-source-images/master/react-native-action-tips/android.png" width="45%" />

## Install

To get started install via npm:
```sh
 npm install react-native-action-tips --save
```

## Usage

Import:
```js
 import ActionTip from 'react-native-action-tips';
```

Then add it to your code:
```js
<ActionTip
  onRef={ref => (this.actionTip = ref)}
  text="Your text here"
  position={{ top: 50 }}
/>

someMethod() {
  this.actionTip.show();
}

```

The component includes a `show()` and `hide()` function

The position of the component can be customised through the `position` prop by passing an object as such `{ top: 0, bottom: 0, left: 0, right: 0 }`. By default the component uses `"absolute"` positioning. This can be changed by passing style through the `actionTipStyle` prop.

<img src="https://raw.githubusercontent.com/LukeBrandonFarrell/open-source-images/master/react-native-action-tips/tip.png" width="45%" />

## Props

| Prop            | Type          | Optional  | Default              | Description                                                                             |
| --------------- | ------------- | --------- | -------------------- | --------------------------------------------------------------------------------------- |
| onRef           | string        | No        |                      | onRef allows you to call the `show()` and `hide()` methods.                             |
| text            | string        | No        |                      | Text which is displayed inside the action tip.                                          |
| duration        | number        | Yes       | 2000 ms              | Duration until the action tip dismisses.                                                |
| animationInDuration  | number   | Yes       | 150 ms               | Duration of fade-in animation.                                                          |
| animationOutDuration | number   | Yes       | 700 ms               | Duration of fade-out animation.                                                         |
| opacity         | number        | Yes       | 0.85                 | Maximum opacity the tip should animate to.                                              |
| position        | object        | Yes       | 0                    | Absolute positioning of the component.                                                  |
| onShow          | func          | Yes       | null                 | Function called when the action tip is displayed.                                       |
| onHide          | func          | Yes       | null                 | Function called when the action tip is displayed.                                       |
| actionTipStyle  | style         | Yes       |                      | Style applied to the action tip container.                                              |
| actionTipTextStyle   | style    | Yes       |                      | Style applied to the action tip text.                                                   |

## Contributing

If you want to issue a PR, go ahead ;)

## Authors

* [**Luke Brandon Farrell**](https://lukebrandonfarrell.com/) - *Author*
* [**Redu**](https://redu.co.uk/) - *Organization*

## License

This project is licensed under the MIT License