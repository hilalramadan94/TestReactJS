# TestReactJS

reference : https://www.youtube.com/watch?v=Ke90Tje7VS0&t=475s

Exclude : node_modules

----------------
REACT - NPM
----------------
cmd (administrator)
npx create-react-app test // > 150MB
cd test
npm start
----------------
BASIC KNOWLEDGES
----------------
JSX -> Javascript XML
BABEL -> Javascript Compiler // test -> babeljs.io
VS Code -> Install "Simple React Snippets", "Prettier - Code Formater"
const //digunakan sama seperti var
let //jika variable diubah2
import React from 'react'; //React = object from module; 'react' = module
hot module reloading //auto reload ketika save
src/components
	imrc //import react component
	cc //create class
	sfc //stateless functional component
//ketika component memiliki beberapa tags, maka harus dibungkus dengan <div></div> agar bisa dicompile babel
//atau bisa juga dengan <React.Fragment></React.Fragment> sebagai bungkus tapi tanpa div
ctrl + , -> search "format on save" -> check //prettier
state -> special prop in react component, object include any data thats component need
ctrl + D //rename same tags
npm i bootstrap
index.js -> import "bootstrap/dist/css/bootstrap.css";
JSX dont have concept of loop
JSX dont have if and else
//notes : keep render method cleaner,
Chrome -> React Developer Tool
//state vs props
//prop : include data thats give to component / input to component (readonly)
//state : include data thats private to component (internal component)
button.btn.btn-danger.btn-sm.m-2 -> <button className="btn btn-danger btn-sm m-2"></button>
