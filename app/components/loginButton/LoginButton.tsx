type Props = {
  title: string;
};

export function LoginButton({ title }: Props) {
  return <button className="Login-Button">{title}</button>;
}
