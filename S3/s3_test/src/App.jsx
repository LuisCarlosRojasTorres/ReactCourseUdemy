import "./App.css"
import ManageData from "./components/ManageData"
import AddImage from "./components/AddImage"
import ListRender from "./components/ListRender"
import PrevStateExample from "./components/PrevStateExample"
import ConditionalRender from "./components/ConditionalRender"
import ConditionalTernario from "./components/ConditionalTernario"
import PropsExample from "./components/PropsExample"
import DesestructuringPropsExample from "./components/DesestructuringPropsExample"

function App() {
  

  return (
    <div>
      {/* <ManageData /> */}
      {/* <AddImage /> */}
      {/* <ListRender /> */}
      {/*<PrevStateExample />*/ }
      {/*<ConditionalRender />*/ }
      {/*<ConditionalTernario />*/ }
      {/*<PropsExample name="Rufa" age={18} />*/}
      <DesestructuringPropsExample brand="Siemens" model="Velaro" year={2020} />
    </div>
  )
}

export default App
