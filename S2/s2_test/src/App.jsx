import FirstComponent from "./components/NewComponent"
import TemplateExpressions from "./components/TemplateExpressions"
import './App.css'


function App() {
  // Comentario para o componente App
  return (
    <div className="app-container">
      <h1>Welcome to S2 Fundamentos</h1>
      <p>Este é um parágrafo de teste.</p>
      {/** Aqui podemos adicionar comentários dentro do JSX */}
      <FirstComponent />
      <TemplateExpressions />
    </div>
  )
}

export default App
