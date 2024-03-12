import "./App.css"
import Workshops from "./components/Workshops/Workshops";
import Campaign from "./components/Campaigns/Campaign";
function App() {


  return (
    <div className="App">
      <div className="title" style={{textAlign: "center", color: "whitesmoke"}}>
        <h1>Deforestation Awareness Campaigns and Workshops</h1>
      </div>
      <Workshops/>
      <Campaign/>
    </div>
  )
}

export default App
