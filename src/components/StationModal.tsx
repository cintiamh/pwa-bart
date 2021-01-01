import "../css/station-modal.css";
import React from "react";
import ReactDOM from "react-dom";
import { StationType } from "../types";
import BackButton from "../components/BackButton";

type Props = {
  onClose: () => void;
  station: StationType;
};

export default function StationModal({ onClose, station }: Props) {
  const className = `StationModal${station !== null ? " expanded" : ""}`;

  const renderHeaderContent = () => {
    if (!station) {
      return null;
    }
    return (
      <div className="StationModal-header-content">
        <h1>{station.name}</h1>
        <p>
          {station.address}, {station.city}
        </p>
      </div>
    );
  };

  const renderBodyContent = () => {
    if (!station) {
      return null;
    }
    return <div className="StationModal-body"></div>;
  };

  return ReactDOM.createPortal(
    <div className={className}>
      <div className="StationModal-content">
        <header className="StationModal-header">
          <div className="StationModal-control">
            <BackButton onClick={onClose} />
          </div>
          {renderHeaderContent()}
        </header>
        {renderBodyContent()}
      </div>
    </div>,
    document.getElementById("root")
  );
}
