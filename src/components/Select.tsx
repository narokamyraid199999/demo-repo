type SelectProps = {
  name: string;
  id: string;
  value: string[];
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ name, id, value, onSelect }: SelectProps) => {
  return (
    <select name={name} id={id} className="form-control" onChange={onSelect}>
      <option value={value[2] ? value[2] : "please select ,,,"} selected>
        {value[2] ? value[2] : "please select ,,,"}
      </option>
      <option value={value[0]}>{value[0]}</option>
      <option value={value[1]}>{value[1]}</option>
    </select>
  );
};

export default Select;
