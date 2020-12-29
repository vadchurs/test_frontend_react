import './../App.css';

let Search = (props) => {
    let onChangeSearchText = (e) => {
        props.setSearchText(e.target.value)
        props.filterUsers()
    }

  return (
      <header className="App-header">
          <input placeholder={"Search"} onChange={onChangeSearchText} type="text" value={props.usersPage.searchText}/>
      </header>
  );
}

export default Search;
