import "../css/station-modal.css";
import React from "react";
import ReactDOM from "react-dom";
import { DeparturesType, EstimateType, StationType } from "../types";
import BackButton from "../components/BackButton";

type Props = {
  departures?: DeparturesType;
  onClose: () => void;
  station: StationType;
};

export default function StationModal({ departures, onClose, station }: Props) {
  const className = `StationModal${station !== null ? " expanded" : ""}`;

  const getMinutesFromNow = (estimate: EstimateType) => {
    if (!estimate.time) {
      return estimate.minutes;
    }
    const now = new Date();
    const diff = Math.floor((estimate.time.getTime() - now.getTime()) / 60000);
    return isNaN(diff) ? "arriving" : `${diff} min`;
  };

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
    if (!departures) {
      return null;
    }
    const { etd } = departures;
    return (
      <div className="StationModal-body">
        {etd.map((e) => (
          <div
            className="StationModal-etd"
            key={`${departures.abbr}-${e.abbreviation}`}
          >
            <div className="StationModal-etd-destination">
              <h3>{e.destination}</h3>
            </div>
            {e.estimate.map((estimate) => (
              <div
                key={`${departures.abbr}-${e.abbreviation}-${getMinutesFromNow(
                  estimate
                )}`}
              >
                <div className="StationModal-etd-time">
                  {getMinutesFromNow(estimate)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
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
