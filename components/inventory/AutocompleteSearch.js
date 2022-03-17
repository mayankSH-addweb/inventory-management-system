import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
function AutocompleteSearch({
  sectionItems,
  searchString,
  handleOnChangeSearchString,
}) {
  return (
    <Autocomplete
      id="free-solo-demo"
      placeholder="Search Here"
      options={sectionItems?.map((option) => option.name)}
      renderInput={(params) => (
        <TextField
          {...params}
          value={searchString}
          onChange={handleOnChangeSearchString}
          label="Search Here"
        />
      )}
    />
  );
}

export default AutocompleteSearch;
