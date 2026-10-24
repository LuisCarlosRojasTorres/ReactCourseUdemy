import ReusedComponent from "./ReusedComponent";

const FirstComponent = () => {
    // Aqui podemos adicionar lógica do componente, se necessário
  return (
    <div>
      <h2>Primeiro Componente</h2>
      <ReusedComponent />
    </div>
  )
}

// Exportamos o componente para ser utilizado em outros arquivos
export default FirstComponent;