import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from 'react';
import Button from '@mui/material/Button';

function Search(props) {
  const data = props.data
  const [searchFor, setSearch] = useState('');
  const [onlyUnlocked, setOnlyUnlocked] = useState(false);
  let selected;

  const handleSelect = (id) => {
    selected = id;
  }
  function handleSearch(search) {
    setSearch(search);
  }
  function handleLocked() {
    setOnlyUnlocked(!onlyUnlocked);
  }

  return (
    <>
      <SearchBar setSearch={handleSearch} onlyUnlocked={handleLocked}></SearchBar>
      <ProductTable data={data} searchFor={searchFor} select={handleSelect} onlyUnlocked={onlyUnlocked}></ProductTable>
      <div className="startButton"><Button size="large" variant="contained" onClick={() => props.start(selected)}>Start</Button></div>
    </>
  );
}

export default Search;
