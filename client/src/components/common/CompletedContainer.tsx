interface propTypes {
  heading: string;
  children: React.ReactNode;
}

const CompletedContainer: React.FC<propTypes> = ({ heading, children }) => {
  return (
    <div style={{ margin: "10px 0px" }}>
      <h1
        className="text-2xl font-bold text-gray-400"
        style={{ padding: "5px 0px" }}
      >
        {heading}
      </h1>
      <div>{children}</div>
    </div>
  );
};

export default CompletedContainer;
