type Props = {
  title: string;
  onClick?: () => void;
};

export function LoginButton({ title, onClick }: Props) {
  return (
    <button onClick={onClick} className="Login-Button">
      {title}
    </button>
  );
}
