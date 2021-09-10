# [Nomad Dsgns](https://www.nomaddsgns.com) Custom Input
React Native Custom Input Component by NomadDsgns 

## Instructions for Use ##
1. Clone Component to project:
    - Command Line: git clone https://github.com/NomadDsgns/nomad-react-native-input.git
    - Copy and paste code into new file
2. Import into file where it's to be used in the project:
    - Add to top of file where component will be used: import NomadInput from './NomadInput.js
3. Add component into project code and pass in required/desired props:
    - label (optional): label for the input field (ie. E-mail, Username, etc)
    - placeholder (optional): placeholder for input field that will be displayed only when field has no text entered
    - value (required): initial value passed to it using state 
    - onChange (required): handler for updating state as text is entered/removed from input field

[Click here](https://reactnative.dev/docs/textinput) For a complete list of available props for react native's default TextInput component.