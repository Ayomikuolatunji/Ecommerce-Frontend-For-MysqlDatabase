import React from "react";
var columns = [
    {
        name: "first_name",
        label: "first_name",
        options: {
            filter: true,
            sort: true,
        },
    },
    {
        name: "last_name",
        label: "last_name",
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: "location",
        label: "location",
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: "phone_number",
        label: "phone_number",
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: "partner",
        label: "partner",
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: "status",
        label: "status",
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: "action",
        label: "action",
        options: {
            filter: true,
            sort: false,
        },
    },
];
export default function ProductTable() {
    var options = {
        filterType: "checkbox",
        sort: true
    };
    return (<div className="mt-10">
      {/* <MUIDataTable
          title={"Products List"}
          data={helper.FakeProduct}
          columns={columns}
          options={options}
        /> */}
    </div>);
}
//# sourceMappingURL=ProductTable.jsx.map