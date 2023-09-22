type Props = {
  title: string;
  Icon?: JSX.Element;
};

export function Button({ title, Icon }: Props) {
  return (
    <button className="Button">
      <div className="Button-title">{title}</div>
      <div className="Button-icon">{Icon && Icon}</div>
    </button>
  );
}
