import React, { useState } from 'react';
import ImageMarker, { Marker } from 'react-image-marker';
import CustomMarker from './CustomMarker';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import "./image.css"

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

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageSrc && (
        <div style={{ cursor: "crosshair", width: "100%", height: "100vh" }}>
          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={5}
            centerOnInit={true}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
                <div className="tools">
                  <button onClick={() => zoomIn()}>Zoom In</button>
                  <button onClick={() => zoomOut()}>Zoom Out</button>
                  <button onClick={() => resetTransform()}>Reset</button>
                </div>
                <TransformComponent>
                  <ImageMarker
                    src={imageSrc as string}
                    markers={markers}
                    onAddMarker={handleAddMarker}
                    markerComponent={CustomMarker}
                    extraClass='image-component'
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      )}
    </div>
  );
};

export default ImageMarkerComponent;
