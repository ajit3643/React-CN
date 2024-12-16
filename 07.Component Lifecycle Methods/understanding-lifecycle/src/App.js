// import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 1
//     };
//   }
//   componentDidMount(){
//     setTimeout(()=>{
//       this.setState((prevState)=>{
//         return { count : prevState.count + 3};
//       });
//     }, 2000);
//     console.log(this.state.count);
//   }
//   getSnapshotBeforeUpdate(){
//     return { count: 1};
//   }
//   componentDidUpdate(_, prevState, snapShot){
//     console.log("count: ", prevState.count);
//     console.log("snapshot: ", snapShot.count);
//   }
//   render(){
//     return(
//       <h1>Hello</h1>
//     )
//   }
// }

// export default App;

// import Timer from "./timer/Timer1";

class App extends React.Component{
  // constructor(){
  //   super();
  //   this.state={
  //     timerOn: false
  //   }
  // }
  // // handleMount = () => {
  // //   this.setState((prevState) => ({mount: !prevState.mount}))
  // // }
  // handleTimerOn = () => {
  //   this.setState((prevState) => ({timerOn: !prevState.timerOn}));
  // }
  render() {
    return (
      <>
      <ErrorBoundary>
        <ComponentA/>
      </ErrorBoundary>
        
        {/* <Timer timerOn={this.state.timerOn}/>
        <button onClick={this.handleTimerOn}>{this.state.timerOn?"STOP":"START"}</button> */}
      </>
    );
  }
}