import { useContext } from "react";
import { WeatherContext } from "../../App";

export default function SearchSection() {
  const { setLocation, onFormSubmit } = useContext(WeatherContext);

  return (
    <form
      className="relative w-[60%] justify-self-end md:max-w-64"
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit();
      }}
    >
      <input
        type="text"
        name="search"
        id="search"
        className="w-full h-10 rounded-full bg-gray-800 pl-10 text-sm"
        placeholder="Search"
        onChange={(e) => setLocation(e.currentTarget.value)}
      />
      <img
        src="icon-search.svg"
        alt=""
        className="w-5 absolute left-[5%] top-[50%] -translate-y-[50%]"
      />
    </form>
  );
}
