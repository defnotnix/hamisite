"use client";

import { useMantineTheme } from "@mantine/core";

import { Circle, CircleMarker, LayerGroup, useMap } from "react-leaflet";

export function MapMarkerEvent({
  data,
  setActive,
}: {
  data: any;
  setActive: (e: any) => void;
}) {
  const theme = useMantineTheme();
  const map = useMap();

  return (
    <>
      <LayerGroup key={data.id}>
        <CircleMarker
          //@ts-ignore
          radius={5}
          eventHandlers={{
            click: () => {},
            mouseover: () => {
              setActive(data.key);
            },
          }}
          center={[data.geo_lat, data.geo_long]}
          pathOptions={{
            fillColor: theme.colors.yellow[6],
            stroke: false,
            opacity: 1,
            fillOpacity: 0.6,
          }}
        />
      </LayerGroup>
    </>
  );
}
