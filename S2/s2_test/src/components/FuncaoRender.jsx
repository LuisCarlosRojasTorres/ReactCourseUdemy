const FuncaoRender = () => {

    // Função que renderiza uma mensagem simples
    const renderMessage = () => {
        return <p>Esta é uma mensagem renderizada pela função.</p>
    }

    // Função que renderiza condicionalmente com base no valor de x
    const renderConditional = (x) => {
        if (x) {
            return <p>O valor de x é verdadeiro.</p>
        } else {
            return <p>O valor de x é falso.</p>
        }        
    }

  return (
    <div>
      <h2>Função de Render</h2>
      {renderMessage()}
      {renderConditional(true)}
      {renderConditional(false)}
    </div>
  )
}

export default FuncaoRender;