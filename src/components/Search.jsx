import SearchIcon from "./Icons/SearchIcon"

function Search() {

  return (
    <div className="search">
        <input type="text" name="search" placeholder="Search note..."/>
        <SearchIcon />
    </div>
  )
}

export default Search
