import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function SearchBar(props) {

    return (
        <div className="searchBar">
            <TextField fullWidth id="outlined-search" label="Search field" type="search" onChange={(e) => props.setSearch(e.target.value)} />
            <FormControlLabel control={<Checkbox onChange={() => props.onlyUnlocked()} />} label="Only without password" />
        </div>
    );
}
export default SearchBar;