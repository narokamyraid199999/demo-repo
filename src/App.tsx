import TextInput from "./components/TextInput";
import Select from "./components/Select";
import CategoryTable from "./components/CategoryTable";
import { useState } from "react";
import Table from "./components/Types/TableType";

const App = () => {
  const [desc, setDescrip] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");

  const [tableRow, setTableRow] = useState<Table[]>([
    { id: 1, desc: "manager", amount: 10, category: "Personal" },
    { id: 2, desc: "finance", amount: 20, category: "Entertainment" },
    { id: 3, desc: "employee", amount: 30, category: "Personal" },
    { id: 4, desc: "assestant", amount: 40, category: "Entertainment" },
  ]);

  const onRowDelete = (id: number) => {
    const newRow: Table[] = tableRow.filter((row) => {
      if (row.id != id) {
        return row;
      }
    });
    setTableRow(newRow);
  };

  const onRowAdd = (
    id: number,
    desc: string,
    amount: number,
    category: string
  ) => {
    const row: Table = { id, desc, amount, category };
    const newRow: Table[] = [...tableRow, row];
    setTableRow(newRow);
  };

  const onCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const onFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const onAmountFill = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: number = parseInt(e.target.value);
    if (val > 100) {
      return null;
    }
    setAmount(val);
    console.log(amount);
  };
  const onDescFill = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescrip(e.target.value);
  };

  return (
    <>
      <div className="container row justify-content-end">
        <div className="col-md-6 mt-5">
          <p>Description</p>
          <TextInput
            name="description"
            id="description"
            type="text"
            changeHandler={onDescFill}
            inputVal={desc}
          />

          <p className="mt-4">Amount</p>

          <TextInput
            name="amount"
            id="amount"
            type="number"
            changeHandler={onAmountFill}
            inputVal={amount}
          />

          <p className="mt-4">Category</p>

          <Select
            onSelect={onCategory}
            name="category"
            id="category"
            value={["Personal", "Entertainment"]}
          />

          <button
            onClick={() => {
              onRowAdd(tableRow.length + 1, desc, amount, category);
            }}
            className="btn btn-primary my-4"
          >
            Submit
          </button>

          <Select
            onSelect={onFilter}
            name="filter"
            id="filter"
            value={["Personal", "Entertainment", "All Category"]}
          />

          <CategoryTable
            filter={filter}
            rowData={tableRow}
            onRowDelete={onRowDelete}
          />
        </div>
      </div>
    </>
  );
};

export default App;
