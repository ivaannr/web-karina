
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const SpainMapSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [mapInitialized, setMapInitialized] = useState(false);

  const places = [
    {
      name: "Burela",
      region: "Galicia",
      emoji: "🌊",
      coordinates: [-7.3558, 43.6656]
    },
    {
      name: "Madrid",
      region: "Comunidad de Madrid",
      emoji: "🏛️",
      coordinates: [-3.7038, 40.4168]
    },
    {
      name: "Barcelona",
      region: "Cataluña",
      emoji: "🏖️",
      coordinates: [2.1734, 41.3851]
    },
    {
      name: "Avilés",
      region: "Asturias",
      emoji: "🏭",
      coordinates: [-5.9249, 43.5563]
    },
    {
      name: "Candás",
      region: "Asturias",
      emoji: "🐟",
      coordinates: [-5.7667, 43.5833]
    },
    {
      name: "A Coruña",
      region: "Galicia",
      emoji: "🗼",
      coordinates: [-8.4115, 43.3623]
    },
    {
      name: "Bilbao",
      region: "País Vasco",
      emoji: "🏭",
      coordinates: [-2.9253, 43.2627]
    }
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-3.7038, 40.4168], // Centro en Madrid
      zoom: 5.5
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Añadir marcadores para cada lugar
      places.forEach((place) => {
        // Crear elemento del marcador
        const markerElement = document.createElement('div');
        markerElement.innerHTML = `
          <div style="
            background: white;
            border: 2px solid #ec4899;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          ">
            ${place.emoji}
          </div>
        `;

        // Crear popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div style="padding: 8px;">
            <h3 style="margin: 0 0 4px 0; font-weight: bold; color: #1f2937;">${place.name}</h3>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">${place.region}</p>
          </div>
        `);

        // Añadir marcador al mapa
        new mapboxgl.Marker(markerElement)
          .setLngLat(place.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });

      setMapInitialized(true);
    });
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap();
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-primary">Lugares que Visitar en España</h2>
          <Heart className="h-6 w-6 text-pink-600" />
        </div>
        <p className="text-muted-foreground">Nuestros próximos destinos por descubrir</p>
      </div>
      
      <Card className="border-pink-100">
        <CardContent className="p-8">
          {!mapInitialized ? (
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold text-primary mb-4">Configurar Mapa</h3>
              <p className="text-muted-foreground mb-6">
                Para ver el mapa interactivo, necesitas un token de Mapbox.
                <br />
                Ve a <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">mapbox.com</a> y crea una cuenta gratuita para obtener tu token público.
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="Pega tu token público de Mapbox aquí"
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                />
                <Button onClick={handleTokenSubmit} className="bg-pink-600 hover:bg-pink-700">
                  Cargar
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Mapa de España</h3>
              <p className="text-muted-foreground mb-4">
                Haz clic en los marcadores para ver más información
              </p>
            </div>
          )}
          
          <div 
            ref={mapContainer} 
            className={`w-full rounded-lg ${mapInitialized ? 'h-96' : 'h-0'}`}
          />
          
          {!mapInitialized && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {places.map((place, index) => (
                  <div key={index} className="bg-pink-50 rounded-lg p-4 hover:bg-pink-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{place.emoji}</span>
                      <div>
                        <h4 className="font-semibold text-primary">{place.name}</h4>
                        <p className="text-sm text-muted-foreground">{place.region}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="bg-pink-50 rounded-lg p-4 hover:bg-pink-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏔️</span>
                    <div>
                      <h4 className="font-semibold text-primary">Pueblitos pequeños de Asturias</h4>
                      <p className="text-sm text-muted-foreground">Asturias</p>
                    </div>
                  </div>
                </div>
                <div className="bg-pink-50 rounded-lg p-4 hover:bg-pink-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏛️</span>
                    <div>
                      <h4 className="font-semibold text-primary">Grecia</h4>
                      <p className="text-sm text-muted-foreground">Europa</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          <div className="mt-8 bg-pink-50 rounded-lg p-6 text-center">
            <p className="text-pink-700 font-medium">
              ¡Cada lugar será una nueva aventura juntos! 💕
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
