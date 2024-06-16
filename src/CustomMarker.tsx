import { MarkerComponentProps } from 'react-image-marker';
 
const CustomMarker = (props: MarkerComponentProps) => {
  return (
    <div
      className="custom-marker"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        left: `8px`,
        cursor: "crosshair",
      }}
    >
      <span>+</span>
      <span>{props.itemNumber.toString()}</span>
    </div>
  );
};

export default CustomMarker