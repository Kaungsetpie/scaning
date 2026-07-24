import { useState } from "react";
import { MapPin, Navigation, Clock } from "lucide-react";
import shweIndustrial from '../assets/shwe_industrial_1111.jpg';
import mingalarKhayapin from '../assets/mingalar_khayapin_1126.jpg';
import htaukKyant124 from '../assets/htauk_kyant_124.jpg';
import nh11HtaukKyant from '../assets/nh11_htauk_kyant_150.jpg';

export default function LocationPage() {
  const [visiblePics, setVisiblePics] = useState({});

  const togglePic = (index) => {
    setVisiblePics(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const currentDate = "23.7.2026";

  const latestUpdates = [
    {
      time: "11:11 AM",
      address: "ရွှေပြည်သာ စက်မှုလမ်း",
      description: "အချက်ပြမှု ရရှိခဲ့သော တည်နေရာ",
      image: shweIndustrial,
      isLatest: false,
    },
    {
      time: "11:26 AM",
      address: "မင်္ဂလာဒုံအောက်လမ်း(ခရေပင်လမ်းဆုံအနီး)",
      description: "အချက်ပြမှု ရရှိခဲ့သော တည်နေရာ",
      image: mingalarKhayapin,
      isLatest: false,
    },
    {
      time: "1:24 PM",
      address: "ထောက်ကြန့်",
      description: "အချက်ပြမှု ရရှိခဲ့သော တည်နေရာ",
      image: htaukKyant124,
      isLatest: false,
    },
    {
      time: "1:50 PM",
      address: "NH11 လမ်း ထောက်ကြန့်",
      description: "နောက်ဆုံး သိရှိရသော တည်နေရာ",
      image: nh11HtaukKyant,
      isLatest: true,
    },
  ];

  return (
    <section className="location-section" id="location">
      <div className="section-title">
        <h2>📍 နောက်ဆုံး သိရှိသည့်နေရာ</h2>
        <p>Find My မှ ရရှိခဲ့သော တည်နေရာ အချက်အလက်များ ({currentDate})</p>
      </div>

      <div className="latest-location-card">
        <div className="latest-header">
          <div>
            <h3>{currentDate}</h3>
            <p>Today's Location Timeline</p>
          </div>

          <span className="latest-badge">
            <Navigation size={14} />
            {latestUpdates.length} Updates Today
          </span>
        </div>

        <div className="latest-updates-list" style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
          {latestUpdates.map((item, index) => {
            const isOpen = !!visiblePics[index];
            return (
              <div 
                key={index} 
                className={`update-item-card ${item.isLatest ? 'is-latest' : ''}`}
                style={{ 
                  padding: "1rem", 
                  borderRadius: "10px", 
                  border: item.isLatest ? "1px solid var(--accent)" : "1px solid var(--border)",
                  backgroundColor: item.isLatest ? "var(--accent-glow, rgba(71, 85, 105, 0.08))" : "var(--card-bg)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <MapPin size={22} style={{ color: item.isLatest ? "var(--accent)" : "var(--text-muted)", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                          <Clock size={14} /> {item.time}
                        </span>
                        {item.isLatest && (
                          <span className="badge" style={{ fontSize: "0.7rem", padding: "0.15rem 0.5rem" }}>
                            <Navigation size={12} />
                            Latest Location
                          </span>
                        )}
                      </div>
                      <h4 style={{ margin: "0.25rem 0", fontSize: "1rem", color: "var(--text-h)" }}>{item.address}</h4>
                      <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text)" }}>{item.description}</p>
                    </div>
                  </div>

                  {item.image && (
                    <button 
                      className="btn btn-secondary btn-sm see-location-btn" 
                      onClick={() => togglePic(index)}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {isOpen ? "hide location picture" : "see location picture"}
                    </button>
                  )}
                </div>

                {isOpen && item.image && (
                  <div className="location-picture-container" style={{ marginTop: "1rem" }}>
                    <div className="location-picture-card">
                      <img 
                        src={item.image} 
                        alt={`${item.address} (${item.time})`} 
                        style={{ width: "100%", maxHeight: "240px", borderRadius: "8px", objectFit: "contain", border: "1px solid var(--border)", backgroundColor: "var(--code-bg)" }} 
                      />
                      <span className="location-picture-label" style={{ display: "block", fontSize: "0.75rem", color: "var(--text)", marginTop: "0.5rem", fontWeight: "500", textAlign: "center" }}>
                        {item.address} ({item.time}) အချက်ပြမှု တည်နေရာမြေပုံ
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}