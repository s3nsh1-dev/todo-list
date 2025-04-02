interface propType {
  children: React.ReactNode;
  heading: string;
}

const OngoingContainer: React.FC<propType> = ({ heading, children }) => {
  return (
    <div style={{ margin: "10px 0px" }}>
      <h1 className="text-2xl font-bold" style={{ padding: "5px 0px" }}>
        {heading}
      </h1>
      <div>{children}</div>
    </div>
  );
};

export default OngoingContainer;
