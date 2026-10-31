import { useState } from 'react'

const LabelEnvolventeExample = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  console.log({ name, email })

  return (
    <div>
      <form> 
        <label>            
            <span>Some text inside the label</span>            
            <input type="text" name="name" placeholder="Digite o seu value da label" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>        
        <label>
            <span>Email</span>            
            <input type="email" name="email" placeholder="Digite o seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default LabelEnvolventeExample