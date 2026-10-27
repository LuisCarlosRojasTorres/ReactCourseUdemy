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
  
  const cars = [
    { index: 1,brand: "Dummy1", model: "Model1", year: 2020 },
    { index: 2,brand: "Dummy2", model: "Model2", year: 2021 },
    { index: 3, brand: "Dummy3", model: "Model3", year: 2022 },
    { index: 4, brand: "Dummy4", model: "Model4", year: 2023 }
  ];
  return (
    <div>
      {/* <ManageData /> */}
      {/* <AddImage /> */}
      {/* <ListRender /> */}
      {/*<PrevStateExample />*/ }
      {/*<ConditionalRender />*/ }
      {/*<ConditionalTernario />*/ }
      {/*<PropsExample name="Rufa" age={18} />*/}
      {cars.map((car) => (
        <DesestructuringPropsExample
          key={car.index}
          brand={car.brand}
          model={car.model}
          year={car.year}
        />
      ))}
    </div>
  )
}

export default App
