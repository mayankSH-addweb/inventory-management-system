import React, { useEffect, useState } from "react";
import {
  Button,
  ClickAwayListener,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import AddInventory from "./AddInventory";
import Paper from "@mui/material/Paper";
import Axios from "axios";
import { EditAttributes } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import AutocompleteSearch from "./AutocompleteSearch";
import InputTextArea, { InputArea } from "./InputTextArea";

function ManageSections() {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [searchString, setSearchString] = useState("");

  const [sectionDetails, setSectionDetails] = React.useState({
    sectionName: "",
    Description: "",
  });

  function handleAddSection() {
    setAdd(true);
  }

  function handleOnChangeOfTextArea(e, index) {
    var pp = [...sectionItems];
    pp[index].Description = e.target.value;
    setSectionItems(pp);
  }

  function handleOnEdit(e) {
    setEdit(true);
  }

  const [sectionItems, setSectionItems] = useState([]);

  const getDataFromAPI = () => {
    Axios.get("http://localhost:3005/inventory").then((res) => {
      setSectionItems(res.data);
    });
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const handleOnChangeSearchString = (e) => {
    setSearchString(e.target.value);

    const filterSectionItems = sectionItems.filter((val) => {
      if (val.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return val;
      }
    });

    e.target.value !== ""
      ? setSectionItems(filterSectionItems)
      : getDataFromAPI();
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Manage Sections
      </h2>
      <Stack spacing={2} sx={{ width: 300 }}>
        <AutocompleteSearch
          sectionItems={sectionItems}
          searchString={searchString}
          handleOnChangeSearchString={handleOnChangeSearchString}
        />
      </Stack>
      {add ? (
        <AddInventory
          setAdd={setAdd}
          sectionDetails={sectionDetails}
          setSectionDetails={setSectionDetails}
        />
      ) : (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography sx={{ display: "inline-flex", m: 1 }}>
              Want To Add Section Here?
            </Typography>
            <Button
              size="small"
              variant="contained"
              sx={{ m: 1 }}
              onClick={handleAddSection}
            >
              Click Here
            </Button>
          </div>
        </>
      )}

      <hr />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ m: 2 }}
      >
        {sectionItems?.map((val, index) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item
                onDoubleClick={() => {
                  setEdit(true);
                }}
              >
                <Button
                  variant="small"
                  className="waah"
                  onClick={(e) => handleOnEdit(e)}
                >
                  Edit
                </Button>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEdit(false);
                  }}
                >
                  <strong>
                    <InputArea
                      edit={edit}
                      sectionItems={sectionItems}
                      setSectionItems={setSectionItems}
                      val={val}
                      index={index}
                    />
                  </strong>

                  <br />
                  <InputTextArea
                    edit={edit}
                    val={val}
                    handleOnChangeOfTextArea={handleOnChangeOfTextArea}
                    index={index}
                  />
                  {edit ? <Button type="submit">Submit</Button> : null}
                </form>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ManageSections;
