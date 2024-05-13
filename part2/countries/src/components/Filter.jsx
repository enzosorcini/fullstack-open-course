const Filter = ({ filterState, filterHandler }) => {
  return (
    <div>
      Find Country: <input value={filterState} onChange={filterHandler}/>
    </div>
  )
}

export default Filter