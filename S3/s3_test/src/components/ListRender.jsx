import React from 'react'

const ListRender = () => {
    const items = ["Item 1", "Item 2", "Item 3"];
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
    </div>
  )
}

export default ListRender