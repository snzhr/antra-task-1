import React from 'react'

export default function Task({id, title, handleRemove}) {
  return (
    <li>{title} <button onClick={() => handleRemove(id)}>Delete</button></li>
  )
}
