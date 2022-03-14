import React, { useState } from "react";
import { Box, TextField, Autocomplete, Button } from "@mui/material";
import { allBanks } from "../../utils/BankItems";
import Heading from "../common/Heading";

const AddSupplier = (props) => {
  const [supplier, setSupplier] = useState({
    name: "",
    phone1: "",
    phone2: "",
    email: "",
    nameInCheque: "",
    address: "",
    bank: "",
    branch: "",
    accNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplier({
      ...supplier,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(supplier);
    setSupplier({
      name: "",
      phone1: "",
      phone2: "",
      email: "",
      nameInCheque: "",
      address: "",
      bank: "",
      branch: "",
      accNumber: "",
    });
  };
  const handleBankChange = (item) => {
    setSupplier({
      ...supplier,
      bank: item.label,
    });
  };
  const resetHandleClick = () => {
    setSupplier({
      name: "",
      phone1: "",
      phone2: "",
      email: "",
      nameInCheque: "",
      address: "",
      bank: "",
      branch: "",
      accNumber: "",
    });
  };
  return (
    <>
      <Heading heading="Add a Supplier" />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <TextField
          id="outlined-basic"
          name="name"
          value={supplier.name}
          onChange={handleChange}
          label="Name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="phone1"
          value={supplier.phone1}
          onChange={handleChange}
          type="number"
          label="Telephone 1"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="phone2"
          value={supplier.phone2}
          onChange={handleChange}
          type="number"
          label="Telephone 2"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="email"
          value={supplier.email}
          onChange={handleChange}
          label="Email"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="nameInCheque"
          value={supplier.nameInCheque}
          onChange={handleChange}
          label="Name in Cheque"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="address"
          value={supplier.address}
          onChange={handleChange}
          label="Address"
          variant="outlined"
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={allBanks}
          name="bank"
          onChange={(event, item) => handleBankChange(item)}
          value={supplier.bank}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Bank" />}
        />
        <TextField
          id="outlined-basic"
          name="branch"
          value={supplier.branch}
          onChange={handleChange}
          label="Branch"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="accNumber"
          value={supplier.accNumber}
          onChange={handleChange}
          type="number"
          label="Account Number"
          variant="outlined"
        />
        <Box>
          <Button variant="contained" type="submit">
            Add
          </Button>
          <Button variant="contained" onClick={resetHandleClick}>
            Reset
          </Button>
          <Button variant="contained" onClick={props.onCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddSupplier;
