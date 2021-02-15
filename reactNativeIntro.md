## Getting Started With React Native (From an Android Studio Developer Perspective)

> Sometimes simplicity is confusing, and is exactly what is happening to me during the ongoing development!

## Installation

1. Install Node.js on Computer
2. Setup Expo

```powershell
npm install expo-cli --global
```

3. Navigate to folder

```powershell
cd documents/Projects/inhere
```

4. Create Expo App in Folder + Blank

```powershell
expo init new-project-name
```

5. Start the application

```powershell
npm start
```

---

## Troubleshooting Setup

Use:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```

If you cannot do

```powershell
expo init DemoProject
```

Use:

```bash
nvm install node --reinstall-packages-from=$(nvm current)
```

If you cannot do

```bash
npm start
```

### Margin for Line Numbers

1. Command Pallet (CMD + Shift + P)
2. Paste code:

```json
"powermode.enabled": true,
  "editor.lineNumbers": "on",
  "editor.lineDecorationsWidth": 3,
  "editor.glyphMargin": false,
  "editor.folding": false
  "prettier.singleQuote": true,
```

### Prettier Doesn't Format On Save

1. Install Prettier
2. File → Preferences → Settings (CMD + ,)
3. Format On Save = ☑️
4. Default Formatter =

```json
*esbenp.prettier-vscode*
```

---

# React Native Basics

All Components need to be passed through the **import at the top** 🤨

```jsx
import {Button} from 'react;
```

### React Native App Structure

RN is structured in two separate places:

1. The Structure:

```jsx
<Text style={style.firstText}>
This txt is black and smaller
</Text>

<Text style={style.anotherText}>
This txt is bigger and white
</Text>
```

2. The Stylesheet:

```jsx
let styles = StyleSheet.create({
  firstText: {
    fontSize: 10,
		color:'black',
  },
  anotherText: {
    fontSize: 30,
    padding: 40,
    color: "white",
    textAlign: "center",
  }.
});
```

### How the Layout works!

React Native only has a couple of Components! As shown below, Any component you use which has a style... WILLL influence the components inside!

- View might have padding! 🤨
- Therefore, Text inside view also has that padding! 😎
- If you DONT want the text to be influenced by the view padding, do NOT put it inside of the View! 😌
- [https://reactnative.dev/docs/components-and-apis](https://reactnative.dev/docs/components-and-apis)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7523a3d3-22af-42bb-a615-fd4b2ff44077/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7523a3d3-22af-42bb-a615-fd4b2ff44077/Untitled.png)

```jsx
<View>
  <Text style={styles.textStyle}>This is text nested inside the view!</Text>
</View>
```

---

### Flex Box

- This allows things to be spread evenly !
- You can Use Row or Column!

```jsx
<View style{styles.anyNameAtAll}>
	<Text>Hello!> I'm left</Text>
	<Text>Hello!> I'm right </Text>
</View>
```

```jsx
let styles = Stylesheet.create({
	anyNameAtAll: {
		flexDirection:'row',
	},
)};
```

---

### Filling the background with an Image

1. Add it at the top with the rest

```jsx
import {ImageBackground} from 'react;
```

2.  Image Component

```jsx
<ImageBackground source={./this/is/image/path} style={styles.backgroundImage}>
```

3. Messy Image Path fix

```jsx
const images = [require("./images/leavesBackground.jpg")];

<ImageBackground source={images[0]} style={styles.backgroundImage}>
```

---

### Organising Many Images 📁

**Troubleshooting at first:**

[Abstracting Component and Styles for Cleaner Code](https://www.notion.so/Abstracting-Component-and-Styles-for-Cleaner-Code-337eb708f1f94b7d874fff4fdb07289a)

1. Create a New Local JavaScript File & inside:

```jsx
export const piccy = {
  leaves: {
    uri: 'https://graffitiwallpaper.com/pics/listings/191_portrait.jpg',
  }, // etc etc
}; // end of entire picture array
```

2. Import this into the Component App.js:

```jsx
import { piccy } from './images';
```

3. Refer to this Image during creation of Images or Background Images like so:

```jsx
<ImageBackground source={piccy.leaves} />
```

---

### Organising Stylesheets 🗄️

1. Create a New Local JavaScript File & Inside:

```jsx
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
  }, // etc etc
)}; // end of entire stylesheet array
```

2. Import this into the Component App.js:

```jsx
import styles from './styleSheets';
```

3. Refer to this Image during creation of Images or Background Images like so:

```jsx
<ImageBackground style={styles.backgroundImage}>
```

---

### Buttons ▶️

1. Add it to the top with the rest

```jsx
import { Button } from 'react';
```

2. Name as shown

```jsx
<Button title="BtnName" style={styles.whateverStyle} />
```

3. Make it do something! (OnClick)

```jsx

```

### Images 📷

If images cut off:

```jsx
image: {
	resizeMode: 'contain',
	alignSelf: 'center',
}
```

### Text Input from User

1. Add it to the top with the rest

```jsx
import { TextInput } from 'react';
```

2.

---

### Fonts & Implementation

> The issue is android only has a couple of fonts. Therefore its best to pick the colour, Bold & Italics and nothing more! Installing custom ones is possible but not worth the hassle

**Font list:**

[react-native-training/react-native-fonts](https://github.com/react-native-training/react-native-fonts)

**Font Implementation**

[https://reactnative.dev/docs/text-style-props](https://reactnative.dev/docs/text-style-props)

---

### Creating a Slider

[https://www.youtube.com/watch?v=8ozJiGyZGrc](https://www.youtube.com/watch?v=8ozJiGyZGrc)

---

### Visualisations

[https://formidable.com/open-source/victory/about/](https://formidable.com/open-source/victory/about/)

### Carousel Effect

[carousel-simple-example](https://snack.expo.io/@vitkor/carousel-simple-example)

---

### Shadows and Borders

[https://ethercreative.github.io/react-native-shadow-generator/](https://ethercreative.github.io/react-native-shadow-generator/)

Popup which is annoying as hell

[Cannot disable unknown suggestion popup · Issue #61529 · microsoft/vscode](https://github.com/microsoft/vscode/issues/61529)

# React Navigation

[React Navigation](https://www.notion.so/React-Navigation-26c92e432dad4c18a9289f702b0fe5a3)

[https://www.youtube.com/watch?v=cS4PgI3zBzY](https://www.youtube.com/watch?v=cS4PgI3zBzY)

[https://www.youtube.com/watch?v=ufvDlmDg2L4](https://www.youtube.com/watch?v=ufvDlmDg2L4)

### Install Navigation Packages

1. Install React Navigation dependencies

```powershell
npm install @react-navigation/native
```

2. Installing dependencies into an Expo managed project

```powershell
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

3. Install Stack Navigation dependencies

```powershell
npm install @react-navigation/stack
```

---

### Setting up App.js

1. Import the Navigator packages into App.js
2. Import Custom JS files made for Screens
3. Create Navigator Objects Named appropiately
4. Create an App Container With Navigator in
5. Export the default App in App.js

**_Full Code for App.js:_**

```jsx
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import Home from './src/Home';
import Login from './src/Login';

// Create Stack Navigator for set routes
const Navigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
});

const App = createAppContainer(Navigator);

export default App;
```

---

### Mapping the other Classes

> No specific imports are required for the classes once this has been appropriately mapped in App.js

1. Each Screen needs to be a Class which extends React. Component

```jsx
export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: () => null,
    };
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
			// Normal React Native Code Here!
		);
```

---

### Static Navigation Options (options)

- You can use this code to pass data between Screens:

```jsx
title: navigation.getParam('name'),
```

- You can disable header to full screen your application by using this code:

```jsx
header: () => null;
```

---

### Classes, State & Data

- Receiving user input
- Using data to Button on-Click
- Passing data Another Screen

> It appears that Hooks work like Lambda methods. Therefore, Classes must be instantiated and constructors in each Class must contain 'state'

This section assumes you have setup React Navigation properly!

1. In order to take advantage of state, it is important to manipulate the Class Constructor like so:

```jsx
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anyName: '',
    };
  }
```

2. Manipulating Text Input requires a property inside the Text Input Component:

- This requires the state value first
- on-Change-Text method variable 'name' can be called ANYTHING

```jsx
<TextInput
  value={this.state.anyName}
  onChangeText={(anyName) => this.setState({ anyName })}
/>
```

3. The Button on-Press method:

```jsx
<Button
  title="confirm"
  onPress={() => navigate('newScreen', { user: this.state.anyName })}
/>
```

---

### Hooks & Setting State for Data

> The latest React Native Environment has much more effective code snippets to avoid verbose code: **Hooks!**

- Hooks must be a function **components**!
- Class components use the **constructor**!
- Hooks must execute in **order**!
- Cannot be used in **If** statements or **Loops**!
- Cannot be **nested** inside anything!
- Hooks are like Java 8 LAMBDA

[Using the State Hook - React](https://reactjs.org/docs/hooks-state.html)
