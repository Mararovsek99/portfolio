/* this code was written entirely with AI */
import "./GlobeIcon.css";

export default function GlobeIcon({ className = "", size = "40px" }) {
  return (
    <div className={`globe ${className}`} style={{ width: size, height: size }}>
      <div className="globe-wrap">
        <div className="outer-ring" />

        <div className="circle" />
        <div className="circle" />
        <div className="circle" />

        <div className="circle-hor" />
        <div className="circle-hor-middle" />
      </div>
    </div>
  );
}
