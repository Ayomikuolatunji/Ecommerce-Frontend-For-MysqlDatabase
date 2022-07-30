import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";

import ProductAction from "./components/ProductAction";
import ProductTable from "./components/ProductTable";
import AddProductModal from "./components/AddProductModal";

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-10 w-[95%] mx-auto">
      {/* header */}
      <ProductAction setIsOpen={setIsOpen}/>
      {/* table */}
      <ProductTable />

      {isOpen && <AddProductModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}