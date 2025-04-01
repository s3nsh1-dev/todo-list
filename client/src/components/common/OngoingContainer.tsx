interface propTypes {
  children: React.ReactNode;
}

const OngoingContainer: React.FC<propTypes> = ({ children }) => {
  return (
    <div style={{ margin: "10px 0px" }}>
      <h1 className="text-2xl font-bold" style={{ padding: "5px 0px" }}>
        Ongoing Goals
      </h1>
      <div>{children}</div>
    </div>
  );
};

export default OngoingContainer;
