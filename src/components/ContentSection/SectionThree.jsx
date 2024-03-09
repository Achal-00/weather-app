import { useContext } from "react";
import { WeatherContext } from "../../App";

export default function SectionThree() {
  const { weather } = useContext(WeatherContext);

  return (
    weather && (
      <div className="bg-gray-800 w-full rounded-2xl p-4 flex flex-col gap-2 md:max-w-96 md:self-center">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img src="icon-uv.svg" alt="uv" className="w-6" />
            <p className="text-gray-400">UV index</p>
          </div>
          <p className="text-sm">{weather.data.values.uvIndex}</p>
        </div>
        <div className="w-[80%] h-[1px] bg-gray-600 place-self-center"></div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img src="icon-humidity.svg" alt="humidity" className="w-6" />
            <p className="text-gray-400">Humidity</p>
          </div>
          <p className="text-sm">{weather.data.values.humidity}%</p>
        </div>
        <div className="w-[80%] h-[1px] bg-gray-600 place-self-center"></div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img src="icon-wind.svg" alt="humidity" className="w-6" />
            <p className="text-gray-400">Wind</p>
          </div>
          <p className="text-sm">{weather.data.values.windSpeed} km/h</p>
        </div>
        <div className="w-[80%] h-[1px] bg-gray-600 place-self-center"></div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img src="icon-snow.svg" alt="snow" className="w-6" />
            <p className="text-gray-400">Snow Intensity</p>
          </div>
          <p className="text-sm">{weather.data.values.snowIntensity}</p>
        </div>
      </div>
    )
  );
}
