import { useSelector } from "react-redux";

export default function Products() {
  const data = useSelector((state) => state.products.Productos);


  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "titulo",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "precio",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "population",
      headerName: "Populations",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      headerAlign: "left",
      align: "left",
    },

    {
      headerName:'Actions',
      flex: 2.2,
      renderCell: (params) => {
        return (
<div class="actions-header">
    <div class="actions-cell">
        <div class="actions-box">
            <div class="edit-box" onclick="navigate('/dashboard/editProduct/params.row.id')">
                <p class="edit-text">EDIT</p>
            </div>
            <div class="delete-box" onclick="deleteProduct(params.row.id)">
                <i class="delete-icon fas fa-sweep"></i>
            </div>
        </div>
    </div>
</div>

        );
      },
    },
  ];

  return (
  
<div></div>
  );
}

