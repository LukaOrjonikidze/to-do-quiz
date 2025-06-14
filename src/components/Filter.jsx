function Filter() {

  return (
    <select className="filter" name="filter">
        <option selected value="all">ALL</option>
        <option value="complete">COMPLETE</option>
        <option value="incomplete">INCOMPLETE</option>
    </select>
  )
}

export default Filter
