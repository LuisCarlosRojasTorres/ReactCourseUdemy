const EventoClick = () => {
  const handleClick = (e) => {
    console.log(e)
    console.log("Botão clicado!");
  }

  return (
    <div>
      <h2>Eventos</h2>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default EventoClick;
