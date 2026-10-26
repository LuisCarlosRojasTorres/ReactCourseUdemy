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
      <DesestructuringPropsExample brand="Dummy1" model="Model1" year={2020} />
      <DesestructuringPropsExample brand="Dummy2" model="Model2" year={2021} />
      <DesestructuringPropsExample brand="Dummy3" model="Model3" year={2022} />
      <DesestructuringPropsExample brand="Dummy4" model="Model4" year={2023} />
    </div>
  )
}

export default App
