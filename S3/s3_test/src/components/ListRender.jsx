import { useState } from "react"

const ListRender = () => {
    const items = ["Item 1", "Item 2", "Item 3"];

    const [users] = useState([
        { id: 111, name: "User 1", age: 25 },
        { id: 222, name: "User 2", age: 30 },
        { id: 333, name: "User 3", age: 35 }
    ])
  return (
    <div>
        <div>
            <h2>ListRender</h2>
            <ul>
                {items.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <div>
            <h2>ListRender</h2>
            <ul>
                {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} years old</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ListRender