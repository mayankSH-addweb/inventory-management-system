import React, { useState } from "react";
import AddSupplier from "../components/suppliers/AddSupplier";
import ViewSupplier from "../components/suppliers/ViewSupplier";
import { Button, Box } from "@mui/material";
import styles from "../styles/Suppliers.module.css";

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
        <Box sx={{ m: 2 }}>
          <h2 className={styles.heading}>
            Click on Add Button to Add a Supplier
          </h2>
          <Button
            sx={{ ml: 2 }}
            variant="contained"
            onClick={() => setOpenAddSupplier(true)}
          >
            Add
          </Button>

          <ViewSupplier />
        </Box>
      )}
    </>
  );
};

export default Suppliers;
