export default function DailyForecastCard(props) {
  return (
    props.data && (
      <div className="grid grid-cols-3 text-sm">
        <p>
          {new Date(props.data.time).toLocaleDateString("en-US", {
            weekday: "long",
          })}
        </p>
        <p className="text-gray-400 flex gap-1 items-center justify-self-center">
          <img src="icon-rain.svg" alt="rain" className="w-4" />
          {props.data.values.rainIntensityAvg}%
        </p>
        <p className="justify-self-end">
          {Math.round(props.data.values.temperatureMin)}&deg;&nbsp;/&nbsp;
          {Math.round(props.data.values.temperatureMax)}&deg;
        </p>
      </div>
    )
  );
}
