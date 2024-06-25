import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import Delete from "../../Assets/delete.svg";
import View from "../../Assets/view.svg";
import { Link } from "react-router-dom";

const UserTable = (props) => {
  const handleDelete = (id) => {
    //delete the item
    // mutation.mutate(id)
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="w-[100%] flex items-center justify-center gap-[15px]">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img
              src={View}
              alt="View"
              className="w-[20px] h-[20px] cursor-pointer "
            />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img
              src={Delete}
              alt="Delete"
              className="w-[20px] h-[20px] cursor-pointer "
            />
          </div>
        </div>
      );
    },
  };

 

  return (
    <div className="w-[95%] ">
      <DataGrid
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        className="bg-white  w-[100%] "
      />
    </div>
  );
};
export default UserTable;
