import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from 'react';
import Button from '@mui/material/Button';

function Search(props) {
  const data = props.data
  const [searchFor, setSearch] = useState('');
  const [onlyUnlocked, setOnlyUnlocked] = useState(false);
  let selectedID, selected;

  const handleSelect = (id, element) => {
    if(selected !== undefined) {selected.target.classList.remove('selected');}
    if (selectedID === id)
      props.start(selectedID);
    selectedID = id;
    selected = element;
    element.target.classList.add('selected');
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
      <div className="startButton"><Button size="large" variant="contained" onClick={() => props.start(selectedID)}>Start</Button></div>
    </>
  );
}

export default Search;
