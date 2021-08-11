import "./UserList.scss";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userData } from "../Dump";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {
  //Algorithm compare item u want to remove out the table
  const [data, setData] = useState(userData);
  const handleDelete = (val) => {
    setData(data.filter((item) => item.id !== val));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userList__name">
            <img src={params.row.avatar} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      sortable: true,
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="userList__action">
            <Link to={`/user/${params.row.id}`}>
              <button className="userList__action--edit">Edit</button>
            </Link>
            <DeleteOutline
              className="userList__action--delete"
              onClick={() => handleDelete(params.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        pageSize={10}
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
