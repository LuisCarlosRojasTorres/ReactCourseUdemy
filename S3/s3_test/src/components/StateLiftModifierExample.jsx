const StateLiftModifierExample = ({modifyState}) => {
  
  const msgs = ["Message 1", "Message 2", "Message 3"]

  return (
    <div>
      <button onClick={() => modifyState(msgs[0])}>1</button>
      <button onClick={() => modifyState(msgs[1])}>2</button>
      <button onClick={() => modifyState(msgs[2])}>3</button>
    </div>
  )
}

export default StateLiftModifierExample