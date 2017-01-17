//import ROOT komponenty App
import App from './App.js';


window.onChangeState = function(state) {
  console.log(state);
  //TODO -> re-render d3 chart
}


//pomoci ReactDOM vykreslime komponentu App do elementu s id "content" (v index.html)
ReactDOM.render(<App />, document.getElementById('content'));
