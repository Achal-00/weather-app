export default function HourlyForecastCard(props) {
  return (
    props.data && (
      <div className="flex flex-col w-20 gap-0.5 text-center">
        <p className="text-gray-400 text-xs">
          {new Date(props.data.time).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p>{Math.round(props.data.values.temperature)}&deg;</p>
        <p className="text-gray-400 text-xs self-center flex gap-1 items-center">
          <img src="icon-rain.svg" alt="rain" className="w-3" />
          {props.data.values.rainIntensity}%
        </p>
      </div>
    )
  );
}
