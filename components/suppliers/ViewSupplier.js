import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns } from "../../utils/DataGridItems";
import Heading from "../common/Heading";
import axios from "axios";

const ViewSupplier = () => {
  const [row, setRow] = useState(5);
  const [supplierData, setSupplierData] = useState([]);
  const pageSizeChangeHandler = (e) => {
    setRow(e);
  };
  useEffect(() => {
    axios.get("http://localhost:3005/supplier").then((res) => {
      setSupplierData(res.data);
    });
  }, []);
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Heading heading="All Suppliers" />
      <Box sx={{ height: 400 }}>
        <DataGrid
          rows={supplierData}
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
