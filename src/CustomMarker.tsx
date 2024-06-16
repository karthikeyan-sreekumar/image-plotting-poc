import { MarkerComponentProps } from "react-image-marker";

const CustomMarker = (props: MarkerComponentProps) => {
  return (
    <div
      className="custom-marker"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        // left: `8px`,
        cursor: "crosshair",
        height: "20px",
      }}
    >
      <span>+</span>
      <span style={{ position: "fixed", zIndex: "100", marginTop: "15px" }}>
        {props.itemNumber.toString()}
      </span>
    </div>
  );
};

export default CustomMarker;
