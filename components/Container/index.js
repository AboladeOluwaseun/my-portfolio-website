export default function Container({ children, rest }) {
  return (
    <div className={` max-w-[100%] mx-auto md:w-[80%] `} {...rest}>
      {children}
    </div>
  );
}
