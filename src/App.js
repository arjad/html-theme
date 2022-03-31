import './App.css';
import Main from "./comp/main/Main";
import Know from "./comp/knowbetter/Know";
import Mobile from "./comp/mobileapp/Mobile";
import Client from "./comp/client/Client"
import Ourclients from './comp/ourclients/Ourclients';
import Call from "./comp/call/Call";
import Foot from "./footer/foot";
import Foot2 from "./comp/foot2/Foot2";

function App() 
{
  return (
    <div className="App">
      <Main/>
      <Know/>
      <Mobile/>
      <Client/>

      <Ourclients/>
      <Call/>
      <Foot/>
      <Foot2/>


    </div>
  );
}

export default App;
