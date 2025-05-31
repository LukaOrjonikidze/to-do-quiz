import Filter from "./Filter"
import ModeToggle from "./ModeToggle"
import Search from "./Search"

function Filters() {

  return (
    <div className="filters">
        <Search />
        <Filter />
        <ModeToggle />
    </div>
  )
}

export default Filters
