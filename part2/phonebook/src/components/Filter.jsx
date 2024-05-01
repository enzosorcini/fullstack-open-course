const Filter = ({ filterState, filterHandler }) => {
  return (
    <div>filter names with:
      <input value={filterState} onChange={filterHandler}/>
    </div>
  )
}

export default Filter