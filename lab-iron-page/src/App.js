import MyImage from "./MyImage.jsx";
import "./App.css";


function App() {
  return (
    <div className="App">  
    <div id="box">
    <MyImage image="ironhack-logo.svg"/>
    <MyImage image="menu-top.svg"/>
    </div>
    <h1>Say hello to<br/> ReactJs</h1> 
    <h5>You will learn how to use<br/>the most popular frontendlibrary,<br/>and become a super Ninja developer</h5>
    <h3><button>Awesome!</button></h3>
    
    <MyImage image="react-logo.svg"/>
    <div/>
        
      
      <div id="conteneur">
      <MyImage image="icon1.png" />
      <h2>Declarative</h2>
      <h6>React makes it<br/>painless to create<br/>interactive UIs.</h6>
      
      <MyImage image="icon2.png" />
      <h2>Components</h2>
      <h6>Build encapsulated<br/>component that<br/>manage their state.</h6>
     
      <MyImage image="icon3.png" />
      <h2>Single-Way</h2>
      <h6>A set of immatubale<br/>values are passed to<br/>the component's.</h6>
      
      
      <MyImage image="icon4.png" />
      <h2>JSX</h2>
      <h6>Statically-typed.<br/>designed to run on<br/>modern browsers.</h6>
      </div>
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
