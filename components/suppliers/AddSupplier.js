import React, { useState } from "react";
import { Box, TextField, Autocomplete, Button } from "@mui/material";
import { allBanks } from "../../utils/BankItems";
import styles from "../../styles/AddSupplier.module.css";
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
      bank: item,
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
        className={styles.mainBox}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <Box className={styles.fieldBox}>
          <TextField
            sx={{ m: 1 }}
            id="outlined-basic"
            name="name"
            value={supplier.name}
            onChange={handleChange}
            label="Name"
            variant="outlined"
          />
          <TextField
            sx={{ m: 1 }}
            id="outlined-basic"
            name="phone1"
            value={supplier.phone1}
            onChange={handleChange}
            type="number"
            label="Telephone 1"
            variant="outlined"
          />
          <TextField
            sx={{ m: 1 }}
            id="outlined-basic"
            name="phone2"
            value={supplier.phone2}
            onChange={handleChange}
            type="number"
            label="Telephone 2"
            variant="outlined"
          />
          <TextField
            sx={{ m: 1 }}
            id="outlined-basic"
            name="email"
            value={supplier.email}
            onChange={handleChange}
            label="Email"
            variant="outlined"
          />
          <TextField
            sx={{ m: 1 }}
            id="outlined-basic"
            name="nameInCheque"
            value={supplier.nameInCheque}
            onChange={handleChange}
            label="Name in Cheque"
            variant="outlined"
          />
          <TextField
            sx={{ m: 1 }}
            id="outlined-basic"
            name="address"
            value={supplier.address}
            onChange={handleChange}
            label="Address"
            variant="outlined"
          />
          <Autocomplete
            sx={{ m: 1 }}
            disablePortal
            id="combo-box-demo"
            options={allBanks}
            name="bank"
            onChange={(event, item) => handleBankChange(item)}
            value={supplier.bank}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => <TextField {...params} label="Bank" />}
          />
          <TextField
            sx={{ m: 1 }}
            id="outlined-basic"
            name="branch"
            value={supplier.branch}
            onChange={handleChange}
            label="Branch"
            variant="outlined"
          />
          <TextField
            sx={{ m: 1 }}
            id="outlined-basic"
            name="accNumber"
            value={supplier.accNumber}
            onChange={handleChange}
            type="number"
            label="Account Number"
            variant="outlined"
          />
        </Box>
        <Box className={styles.btnBox}>
          <Button sx={{ m: 1 }} variant="contained" type="submit">
            Add
          </Button>
          <Button sx={{ m: 1 }} variant="contained" onClick={resetHandleClick}>
            Reset
          </Button>
          <Button sx={{ m: 1 }} variant="contained" onClick={props.onCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddSupplier;
