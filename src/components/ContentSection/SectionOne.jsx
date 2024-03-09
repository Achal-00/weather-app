import { useContext } from "react";
import HourlyForecastCard from "./HourlyForecastCard";
import { WeatherContext } from "../../App";

export default function SectionOne() {
  const { weather, weatherForecast } = useContext(WeatherContext);

  return (
    weather &&
    weatherForecast && (
      <div className="bg-gray-800 w-full rounded-2xl p-4 md:max-w-96 md:self-center">
        <h1 className="text-lg">{weather.location.name.split(",")[0]}</h1>
        <p className="text-sm text-gray-400">
          {new Date(weather.data.time).toLocaleString()}
        </p>
        <div className="pt-4 pb-6 flex gap-2 items-center">
          <img
            src={
              new Date(weather.data.time).getHours() > 6 &&
              new Date(weather.data.time).getHours() < 19
                ? "icon-sun.svg"
                : "icon-moon.svg"
            }
            alt=""
            className="w-8 animate-pulse"
          />
          <h1 className="text-4xl">
            {Math.round(weather.data.values.temperature)}&deg;
          </h1>
        </div>
        <div className="grid grid-flow-col overflow-x-scroll scrollbar-hide">
          {weatherForecast.timelines.hourly.slice(0, 24).map((item) => (
            <HourlyForecastCard key={item.time} data={item} />
          ))}
        </div>
      </div>
    )
  );
}
