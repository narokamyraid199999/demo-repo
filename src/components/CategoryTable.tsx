import Table from "../components/Types/TableType";

type TableProp = {
  rowData: Table[];
  onRowDelete: (id: number) => void;
  filter: string;
};

const CategoryTable = ({ rowData, onRowDelete, filter }: TableProp) => {
  if (rowData.length < 1) {
    return <></>;
  }
  return (
    <table className="table table-striped my-4">
      <thead>
        <tr>
          <td>Description</td>
          <td>Amount</td>
          <td>Category</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {rowData.map((row, index) => {
          const { id, desc, amount, category } = row;
          if (category != filter && filter != "All Category") {
            return <tr key={index}></tr>;
          }
          return (
            <tr key={index}>
              <td>{desc}</td>
              <td>{amount}</td>
              <td>{category}</td>
              <td>
                <button
                  onClick={() => {
                    onRowDelete(id);
                  }}
                  className="btn btn-outline-danger cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CategoryTable;
