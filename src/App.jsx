import React, { createContext, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import Header from "./components/Header/Header";
import Loader from "./components/Misc/Loader";
import ContentSection from "./components/ContentSection/ContentSection";
import Footer from "./components/Misc/Footer";
import axios from "axios";

export const WeatherContext = createContext();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState();
  const [weatherForecast, setWeatherForecast] = useState();
  const [location, setLocation] = useState();
  const [city, setCity] = useState();
  const options = { method: "GET", headers: { accept: "application/json" } };

  // Fetching weather data for current user
  useEffect(() => {
    if (city) {
      setLoading(true);
      axios
        .get(
          `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${
            import.meta.env.VITE_API_KEY
          }`
        )
        .then((response) => setWeather(response.data))
        .catch((err) =>
          toast.error("Cannot retrieve realtime weather information")
        );

      axios
        .get(
          `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${
            import.meta.env.VITE_API_KEY
          }`
        )
        .then((response) => setWeatherForecast(response.data))
        .catch((err) =>
          toast.error("Cannot retrieve weather forecast information")
        );
      setLoading(false);
    }
  }, [city]);

  // Initial user location fetching
  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => setCity(response.data.city))
      .catch((err) => {
        toast.error("Cannot retrieve location");
      });
  }, []);

  // Fetching details for user defined location
  const onFormSubmit = () => {
    setLoading(true);

    setLoading(true);
    axios
      .get(
        `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => setWeather(response.data))
      .catch((err) =>
        toast.error("Cannot retrieve realtime weather information")
      );

    axios
      .get(
        `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => setWeatherForecast(response.data))
      .catch((err) =>
        toast.error("Cannot retrieve weather forecast information")
      );
    setLoading(false);
  };

  // Managing loading state
  useEffect(() => {
    if (loading) {
      document.querySelector(".loader").classList.replace("hidden", "block");
    } else {
      document.querySelector(".loader").classList.replace("block", "hidden");
    }
  }, [loading]);

  return (
    <WeatherContext.Provider
      value={{ weather, weatherForecast, setLocation, onFormSubmit }}
    >
      <div className="min-h-screen p-4 font-custom-font text-gray-50 relative flex flex-col gap-12 bg-[url('/bg-sky.jpg')] bg-no-repeat bg-cover">
        <Header />
        <ContentSection />
        <Loader />
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </WeatherContext.Provider>
  );
}
