import React, { useState } from "react";
import AddSupplier from "../components/suppliers/AddSupplier";
import ViewSupplier from "../components/suppliers/ViewSupplier";
import { Button, Box } from "@mui/material";
import Heading from "../components/common/Heading";

const Suppliers = () => {
  const [openAddSupplier, setOpenAddSupplier] = useState(false);
  const handleCancel = () => {
    setOpenAddSupplier(false);
  };
  return (
    <>
      {openAddSupplier ? (
        <AddSupplier onCancel={handleCancel} />
      ) : (
        <Box>
          <h3>Click on Add Button to Add a Supplier</h3>
          <Button variant="contained" onClick={() => setOpenAddSupplier(true)}>
            Add
          </Button>
          <ViewSupplier />
        </Box>
      )}
    </>
  );
};

export default Suppliers;
