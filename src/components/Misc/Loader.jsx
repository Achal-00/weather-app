export default function Loader() {
  return (
    <div className="bg-gray-900 absolute top-0 left-0 w-full h-full hidden loader">
      <div className="h-screen flex place-content-center place-items-center">
        <div className="loader-container">
          <div className="cloud front">
            <span className="left-front"></span>
            <span className="right-front"></span>
          </div>
          <span className="sun sunshine"></span>
          <span className="sun"></span>
          <div className="cloud back">
            <span className="left-back"></span>
            <span className="right-back"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
