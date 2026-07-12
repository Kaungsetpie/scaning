import { useState } from "react";
import { MapPin, Calendar, Navigation } from "lucide-react";
import kyaik from '../assets/kyaik.jpg';
import mingalar from '../assets/mingalar.jpg';
import tawin from '../assets/tawwin.jpg';
import han from '../assets/han.jpg';
import gan from '../assets/gan.jpg';

export default function PreviousLocationsPage() {
  const [visiblePlacePics, setVisiblePlacePics] = useState({});

  const togglePlacePic = (placeKey) => {
    setVisiblePlacePics(prev => ({
      ...prev,
      [placeKey]: !prev[placeKey]
    }));
  };

  const placeImages = {
    "ဟံသာဝတီလမ်း": { img: han, label: "ဟံသာဝတီလမ်း တည်နေရာပုံ" },
    "မင်္ဂလာဒုံအောက်လမ်း": { img: mingalar, label: "မင်္ဂလာဒုံအောက်လမ်း တည်နေရာပုံ" },
    "ကျိုက်ဝိုင်းဘုရားလမ်း": { img: kyaik, label: "ကျိုက်ဝိုင်းဘုရားလမ်း တည်နေရာပုံ" },
    "တော်ဝင်လမ်း": { img: tawin, label: "တော်ဝင်လမ်း တည်နေရာပုံ" },
    "ဂန္ဓမာလမ်း": { img: gan, label: "ဂန္ဓမာလမ်း တည်နေရာပုံ" }
  };

  const locations = [
    {
      date: "7/7/2026",
      address: [
        "သမိုင်းရက်ကွက်",
        "ပါရမီလမ်း",
        "ကျိုက်ဝိုင်းဘုရားလမ်း - 10:30am to 2:10pm",
        "ဂန္ဓမာလမ်း - ဒီနေ့အတွက် နောက်ဆုံး location",
      ],
    },
    {
      date: "8/7/2026",
      address: ["ဟံသာဝတီလမ်း - နှစ်ရက်နီးပါးကြာ"],
    },
    {
      date: "9/7/2026",
      address: [
        "တော်ဝင်လမ်း - 2:36pm",
        "မင်္ဂလာဒုံအောက်လမ်း - 5:00pm",
        "ရွှေပြည်သာ ရပ်ကွက်၊ ရာဇာဓိရာဇ်လမ်း - 9:49pm ၊ နောက်ဆုံးတည်နေရာ",
      ],
    },
  ];

  return (
    <section id="previous-locations" className="previous-locations-section">
      <div className="section-title">
        <h2>🕒 ယခင် တည်နေရာများ</h2>
        <p>Previous Location History</p>
      </div>

      <div className="location-timeline">
        {locations.map((day, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot">
              <Calendar size={18} />
            </div>

            <div className="timeline-card">
              <div className="card-header">
                <h3>{day.date}</h3>
                <span>{day.address.length} Locations</span>
              </div>

              <div className="location-list">
                {day.address.map((place, i) => {
                  const matchedKey = Object.keys(placeImages).find(k => place.includes(k));
                  const matchedData = matchedKey ? placeImages[matchedKey] : null;
                  const isOpen = !!visiblePlacePics[place];

                  return (
                    <div key={i} className="location-row-container" style={{ marginBottom: "0.75rem" }}>
                      <div
                        className={`location-row ${
                          place.includes("နောက်ဆုံး") ? "last-location" : ""
                        }`}
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                      >
                        <div className="location-row-main" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                          <MapPin size={18} />
                          <span>{place}</span>
                          {place.includes("နောက်ဆုံး") && (
                            <span className="badge">
                              <Navigation size={14} />
                              Last of Day
                            </span>
                          )}
                        </div>

                        {matchedData && (
                          <button
                            className="see-location-btn row-btn"
                            onClick={() => togglePlacePic(place)}
                            style={{ padding: "0.25rem 0.5rem", fontSize: "0.7rem", whiteSpace: "nowrap" }}
                          >
                            {isOpen ? "hide picture" : "see location picture"}
                          </button>
                        )}
                      </div>

                      {matchedData && isOpen && (
                        <div className="place-image-preview" style={{ marginTop: "0.5rem", padding: "0.5rem", borderRadius: "8px", border: "1px solid var(--border)", backgroundColor: "var(--code-bg)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <img 
                            src={matchedData.img} 
                            alt={matchedData.label} 
                            style={{ width: "100%", maxHeight: "200px", objectFit: "contain", borderRadius: "6px" }} 
                          />
                          <span style={{ display: "block", fontSize: "0.7rem", color: "var(--text)", marginTop: "0.4rem", textAlign: "center", fontWeight: "500" }}>
                            {matchedData.label}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}