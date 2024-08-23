type PropsTypes = {
  name?: string;
  classname?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = (props: PropsTypes) => {
  const { onClick, name, type, children, classname } = props;
  return (
    <>
      <button
        onClick={onClick}
        name={name}
        type={type}
        className={`px-4 py-2 rounded-md ${classname} font-bold`}>
        {children}
      </button>
    </>
  );
};

export default Button;
