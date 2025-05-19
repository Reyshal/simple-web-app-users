"use client";

import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react";
import { columns } from "./columns";
import axios from "axios";

export default function UserTable() {
  const [state, setState] = useState({
    users: [],
    loading: true,
    rowCount: 0,
  });
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  })

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true
    }));

    axios
      .get(`http://localhost:5001/api/users?page=${paginationModel.page + 1}&limit=${paginationModel.pageSize}`)
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          users: response.data.users,
          rowCount: response.data.total,
          loading: false,
        }));
      });
  }, [paginationModel]);

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        loading={state.loading}
        rows={state.users}
        columns={columns}
        rowCount={state.rowCount}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[10, 15, 20]}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
      />
    </Box>
  )
}