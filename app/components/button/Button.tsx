type Props = {
  title: string;
  Icon?: JSX.Element;
};

export function Button({ title, Icon }: Props) {
  return (
    <button className="Button">
      {title}
      <i className="Button-icon">{Icon && Icon}</i>
    </button>
  );
}
