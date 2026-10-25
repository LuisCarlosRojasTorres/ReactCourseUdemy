const EventoClick = () => {
  const handleClick = (e) => {
    console.log(e)
    console.log("Botão clicado!");
  }

  return (
    <div>
      <h2>Eventos</h2>
      <button onClick={handleClick}>Clique aqui</button>
      <button onClick={() => console.log("Função no evento")}>Clique funcao no evento</button>
    </div>
  )
}

export default EventoClick;
