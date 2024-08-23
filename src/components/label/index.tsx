type Props = {
  children: React.ReactNode;
  name: string;
};
const Label = ({ children, name }: Props) => {
  return (
    <>
      <label htmlFor={name}>{children}</label>
    </>
  );
};

export default Label;
