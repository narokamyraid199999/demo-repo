type TextProps = {
  type: "text" | "number";
  name: string;
  id: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputVal: string | number;
};

const TextInput = ({ type, name, id, changeHandler, inputVal }: TextProps) => {
  return (
    <input
      onChange={changeHandler}
      type={type}
      name={name}
      id={id}
      className="form-control"
      value={inputVal}
    />
  );
};

export default TextInput;
