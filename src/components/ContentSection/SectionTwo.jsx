import { useContext } from "react";
import DailyForecastCard from "./DailyForecastCard";
import { WeatherContext } from "../../App";

export default function SectionTwo() {
  const { weatherForecast } = useContext(WeatherContext);

  return (
    weatherForecast && (
      <div className="bg-gray-800 w-full rounded-2xl p-4 flex flex-col gap-4 md:max-w-96 md:self-center">
        {weatherForecast.timelines.daily.map((item) => (
          <DailyForecastCard key={item.time} data={item} />
        ))}
      </div>
    )
  );
}
