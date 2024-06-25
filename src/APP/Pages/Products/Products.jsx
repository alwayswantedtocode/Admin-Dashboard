import React, { useState } from "react";
import ProductsTable from "../../../Components/Users/DataTable";
import IMAGE from "../../../Assets/profile-gender-neutral.jpg";
import { products } from "../../../Components/data";
import AddUsers from "../../../Components/Aside/AddUsers";

const Products = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="w-[100%] h-[100%] flex items-center justify-center">
            <img
              src={params.row.img || IMAGE}
              alt=""
              className="w-[2.5rem] h-[2.5rem] rounded-[50%] object-cover"
            />
          </div>
        );
      },
    },

    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-[10px] py-[20px] relative boder-2 border-red-400">
      <div className="flex  gap-[20px] px-[35px]">
        <h1 className="text-3xl font-bold">Products</h1>
        <button
          className="w-max h-[3rem] p-[0.5rem] rounded-[0.5rem] bg-white text-black font-semibold"
          onClick={() => setOpen(true)}
        >
          Add New Products
        </button>
      </div>
      <div className="w-[100%] flex justify-center">
        <ProductsTable slug="Products" columns={columns} rows={products} />
      </div>
      {open && <AddUsers slug="Products" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
