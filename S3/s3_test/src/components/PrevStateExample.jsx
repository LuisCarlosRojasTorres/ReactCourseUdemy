import { useState } from "react"

const PrevStateExample = () => {    

    const [users, setUsers] = useState([
        { id: 1, name: "User 1", age: 25 },
        { id: 2, name: "User 2", age: 30 },
        { id: 3, name: "User 3", age: 35 }
    ])

    const deleteRandom = () => {
        const randomIndex = Math.floor(Math.random() * (users.length +1) );
        
        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) =>  randomIndex !== user.id);
        });
    }
  return (
    <div>        
        <div>
            <h2>PrevStateExample</h2>
            <ul>
                {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} years old</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    </div>
  )
}

export default PrevStateExample