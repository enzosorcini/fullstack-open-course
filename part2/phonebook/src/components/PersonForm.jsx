const PersonForm = ({
  handleSubmit,
  nameState,
  nameHandler,
  numberState,
  numberHandler
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>name: <input value={nameState} onChange={nameHandler}/></div>
      <div>number: <input value={numberState} onChange={numberHandler}/></div>
      <div><button type="submit">Add</button></div>
    </form>
  )
}

export default PersonForm