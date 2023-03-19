
import Header from "../../AdminComponents/Headers";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../../../Redux/productSlice";

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
                      <div class="edit-box"
                          onclick="navigate('/dashboard/editProduct/params.row.id')"
                          style="background-color: #388e3c; border-radius: 4px; cursor: pointer; display: flex; justify-content: center; width: 100px; margin: 0 auto; padding: 5px;">
                        <p class="edit-text" style="color: #f5f5f5; margin-left: 5px;">EDIT</p>
                      </div>
                      <div class="delete-box"
                          onclick="deleteProduct(params.row.id)"
                          style="background-color: red; border-radius: 4px; cursor: pointer; display: flex; justify-content: center; width: 60px; margin: 0 auto; padding: 5px;">
                        <i class="delete-icon fas fa-sweep" style="transform: scale(110%);"></i>
                      </div>
                    </div>
                  </div>
                </div>
        );
      },
    },
  ];

  return (
  
  <div class="products-header">
  <div class="products-subtitle">
    <h1 class="products-title">PRODUCTS</h1>
    <p class="products-subtitle-text">Managing the Products Stocks</p>
  </div>
  <div class="products-grid">
    <div class="data-grid" style="margin: 40px 0 0 0; height: 75vh;">
    </div>
  </div>
</div>
  );
}

