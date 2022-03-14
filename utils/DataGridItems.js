import { Button } from "@mui/material";

export const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "phone1",
    headerName: "Phone No. 1",
    width: 150,
  },
  {
    field: "phone2",
    headerName: "Phone No. 2",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "nameInCheque",
    headerName: "Name In Cheque",
    width: 150,
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "bank",
    headerName: "Bank",
    width: 150,
  },
  {
    field: "branch",
    headerName: "Branch",
    width: 150,
  },
  {
    field: "accNumber",
    headerName: "Account Number",
    width: 150,
  },
  {
    field: "editAction",
    headerName: "Edit",
    width: 100,
    renderCell: (param) => (
      <Button variant="contained" color="success">
        Edit
      </Button>
    ),
  },
  {
    field: "deleteAction",
    headerName: "Delete",
    width: 120,
    renderCell: (param) => (
      <Button variant="contained" color="error">
        Delete
      </Button>
    ),
  },
];
