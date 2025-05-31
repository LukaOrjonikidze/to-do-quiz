function Filter() {

  return (
    <select className="filter" name="filter">
        <option selected value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
    </select>
  )
}

export default Filter
