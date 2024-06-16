import React, { useState } from "react";
import ImageMarker, { Marker } from "react-image-marker";
import CustomMarker from "./CustomMarker";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./image.css";

const ImageMarkerComponent: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const [markers, setMarkers] = useState<Marker[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddMarker = (marker: Marker) => {
    setMarkers([...markers, marker]);
  };
  console.log(markers);
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageSrc && (
        <TransformWrapper>
          <TransformComponent>
            <div style={{ cursor: "crosshair" }}>
              <ImageMarker
                src={imageSrc as string}
                markers={markers}
                onAddMarker={handleAddMarker}
                markerComponent={CustomMarker}
                extraClass="image-component"
              />
            </div>
          </TransformComponent>
        </TransformWrapper>
      )}
    </div>
  );
};

export default ImageMarkerComponent;
