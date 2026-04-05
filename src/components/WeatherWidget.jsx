import React, { useEffect, useState } from 'react';
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user's location and fetch weather
    navigator.geolocation.getCurrentPosition(position => {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&current_weather=true`)
        .then(res => res.json())
        .then(data => {
          setWeather(data.current_weather);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, () => setLoading(false));
  }, []);

  if (loading || !weather) return null;

  const getIcon = () => {
    if (weather.temperature > 25) return <Sun size={20} color="#f59e0b" />;
    if (weather.weathercode === 3) return <Cloud size={20} color="#94a3b8" />;
    if (weather.weathercode === 2) return <CloudRain size={20} color="#60a5fa" />;
    return <Wind size={20} color="#00cfff" />;
  };

  return (
    <div style={{
      position: 'fixed',
      top: '100px',
      left: '20px',
      zIndex: 1000,
      background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(10px)',
      borderRadius: '30px',
      padding: '8px 15px',
      border: '1px solid rgba(0,204,255,0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '0.8rem',
      color: 'white',
    }}>
      {getIcon()}
      <span>{Math.round(weather.temperature)}°C</span>
    </div>
  );
}