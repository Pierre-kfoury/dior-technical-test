type Props = {
  title: string;
};

export function LoginButton({ title }: Props) {
  function handleClick() {
    window.location.href = "/catalog";
  }

  return (
    <button onClick={handleClick} className="Login-Button">
      {title}
    </button>
  );
}
