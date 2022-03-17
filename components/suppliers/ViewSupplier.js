import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, TextField } from "@mui/material";
import { columns } from "../../utils/DataGridItems";
import Heading from "../common/Heading";
import axios from "axios";

const ViewSupplier = () => {
  const [row, setRow] = useState(5);
  const [supplierData, setSupplierData] = useState([]);
  const [query, setQuery] = useState("");
  const pageSizeChangeHandler = (e) => {
    setRow(e);
  };
  useEffect(() => {
    axios.get("http://localhost:3005/supplier").then((res) => {
      setSupplierData(res.data);
    });
  }, []);
  const search = (rows) => {
    return rows.filter(
      (row) =>
        row.name.toLowerCase().includes(query.trim().toLowerCase()) ||
        row.email.toLowerCase().includes(query.trim().toLowerCase())
    );
  };
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Heading heading="All Suppliers" />
      <Box>
        <TextField
          id="outlined-basic"
          label="Search Here"
          variant="outlined"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </Box>
      <Box sx={{ height: 400 }}>
        <DataGrid
          rows={search(supplierData)}
          columns={columns}
          pageSize={row}
          onPageSizeChange={pageSizeChangeHandler}
          rowsPerPageOptions={[5, 10, 15]}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default ViewSupplier;
