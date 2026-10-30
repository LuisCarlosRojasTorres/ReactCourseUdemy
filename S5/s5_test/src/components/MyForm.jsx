const MyForm = () => {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Digite o seu Nome"/>
            </div>            
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default MyForm