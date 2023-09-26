type InputProps = {
  onChangeValue: (value: any) => void;
  onChangePassword: (value: any) => void;
  error: any;
};

export function Input({
  onChangeValue: handleChangeValue,
  onChangePassword: handleChangePassword,
  error,
}: InputProps) {
  const customClassName = error ? "input input-error" : "input";

  return (
    <div className="input-container">
      <input
        onChange={(e) => handleChangeValue(e)}
        placeholder="LOGIN"
        className={customClassName}
        type="text"
      />
      <input
        onChange={(e) => handleChangePassword(e)}
        placeholder="PASSWORD"
        className={customClassName}
        type="password"
      />
    </div>
  );
}
