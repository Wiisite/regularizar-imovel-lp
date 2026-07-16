import { useState, useEffect } from 'react';

export interface UserLocation {
  city: string;
  state: string;
  loading: boolean;
}

export function useLocation(defaultCity = 'Guarulhos', defaultState = 'SP'): UserLocation {
  const [location, setLocation] = useState<UserLocation>({
    city: defaultCity,
    state: defaultState,
    loading: true,
  });

  useEffect(() => {
    // 1. Check URL query parameters (e.g. ?cidade=Poa&estado=SP or ?utm_city=Poa)
    const params = new URLSearchParams(window.location.search);
    const urlCity = params.get('cidade') || params.get('utm_city') || params.get('city');
    const urlState = params.get('estado') || params.get('utm_state') || params.get('state');

    if (urlCity) {
      const decodedCity = decodeURIComponent(urlCity);
      const decodedState = urlState ? decodeURIComponent(urlState) : defaultState;
      setLocation({
        city: decodedCity,
        state: decodedState.toUpperCase(),
        loading: false,
      });
      localStorage.setItem('detected_city', decodedCity);
      localStorage.setItem('detected_state', decodedState.toUpperCase());
      return;
    }

    // 2. Check localStorage cache to speed up load time
    const cachedCity = localStorage.getItem('detected_city');
    const cachedState = localStorage.getItem('detected_state');
    if (cachedCity && cachedState) {
      setLocation({
        city: cachedCity,
        state: cachedState,
        loading: false,
      });
      return;
    }

    // 3. Fallback: Fetch from a free Geolocation API
    let active = true;
    async function fetchGeo() {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error('IP API lookup failed');
        const data = await res.json();
        
        if (data.city && active) {
          // Normalize to handle formatting
          const city = data.city;
          const state = data.region_code || defaultState;
          
          setLocation({
            city,
            state: state.toUpperCase(),
            loading: false,
          });
          
          localStorage.setItem('detected_city', city);
          localStorage.setItem('detected_state', state.toUpperCase());
        }
      } catch (err) {
        console.warn('IP Geolocation failed, using defaults.', err);
        if (active) {
          setLocation({
            city: defaultCity,
            state: defaultState,
            loading: false,
          });
        }
      }
    }

    fetchGeo();
    
    return () => {
      active = false;
    };
  }, [defaultCity, defaultState]);

  return location;
}
