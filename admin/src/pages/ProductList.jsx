import { DataGrid } from "@material-ui/data-grid";
import "./ProductList.scss";
import { productsData } from "../Dump";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ProductList = () => {
  const [data, setData] = useState(productsData);
  const handleDelete = (val) => {
    setData(data.filter((item) => item.id !== val));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Product Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productlist__name">
            <img src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 120 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "price", headerName: "Price", width: 160 },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="productlist__action">
            <Link to={`/product/${params.row.id}`}>
              <button className="productlist__action--edit">Edit</button>
            </Link>
            <DeleteOutline
              className="productlist__action--delete"
              onClick={() => handleDelete(params.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="productlist">
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
