import "./App.css"
import ManageData from "./components/ManageData"
import AddImage from "./components/AddImage"
import ListRender from "./components/ListRender"
import PrevStateExample from "./components/PrevStateExample"
import ConditionalRender from "./components/ConditionalRender"
import ConditionalTernario from "./components/ConditionalTernario"
import PropsExample from "./components/PropsExample"

function App() {
  

  return (
    <div>
      {/* <ManageData /> */}
      {/* <AddImage /> */}
      {/* <ListRender /> */}
      {/*<PrevStateExample />*/ }
      {/*<ConditionalRender />*/ }
      {/*<ConditionalTernario />*/ }
      <PropsExample name="Rufa" age={18} />
      
    </div>
  )
}

export default App
