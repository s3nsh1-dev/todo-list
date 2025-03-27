const moreCss = `rounded-xl w-50 font-bold cursor-pointer`;
const hoverAnimation =
  "flex items-center justify-center transition-transform duration-200 hover:scale-105";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-20">
      <h1 className="font-bold text-5xl">what ToDo....?</h1>
      <div className="flex gap-3 text-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <div
            className={`bg-blue-500 ${moreCss}  ${hoverAnimation}`}
            style={{ padding: "0.5rem" }}
          >
            Daily Tasks
          </div>
          <div
            className={`bg-yellow-500 ${moreCss}${hoverAnimation}`}
            style={{ padding: "0.5rem" }}
          >
            Weekly Tasks
          </div>
          <div
            className={`bg-red-500 ${moreCss}${hoverAnimation}`}
            style={{ padding: "0.5rem" }}
          >
            Monthly Tasks
          </div>
          <div
            className={`bg-green-800 ${moreCss}${hoverAnimation}`}
            style={{ padding: "0.5rem" }}
          >
            Yearly Tasks
          </div>
        </div>
        <div
          className={`bg-purple-500 flex justify-center items-center w-10 rounded-xl cursor-pointer ${hoverAnimation}`}
        >
          <p className={`rotate-90 flex gap-3 font-bold`}>
            <span className="rotate-270">N</span>
            <span className="rotate-270">O</span>
            <span className="rotate-270">T</span>
            <span className="rotate-270">E</span>
            <span className="rotate-270">S</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
