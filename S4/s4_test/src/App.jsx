import './App.css'
import CssComponentExample from './components/CssComponentExample'
import CssModuleExample from './components/CssModuleExample'

function App() {
  
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <CssComponentExample />
      <CssModuleExample />
      <h1 className="css_module_example">CssModuleExample2</h1>
    </div>
  )
}

export default App
