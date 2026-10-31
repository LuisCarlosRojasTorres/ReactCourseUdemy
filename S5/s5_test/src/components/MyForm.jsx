const MyForm = () => {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Digite o seu Nome"/>
            </div>                        
        </form>
        <input type="submit" value="Submit" />
    </div>
  )
}

export default MyForm