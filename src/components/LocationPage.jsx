import { useState } from "react";
import { MapPin, Calendar, Navigation } from "lucide-react";
import shwe from '../assets/shwe.jpg'

export default function LocationPage() {
  const [showPicture, setShowPicture] = useState(false);

  const latestLocation = {
    date: "10/7/2026",
    address: "ရွှေပြည်သာ ရပ်ကွက်၊ ရာဇာဓိရာဇ်လမ်း(တစ်ညလုံး)",
    description: "နောက်ဆုံးတည်နေရာ",
  };

  return (
    <section className="location-section" id="location">
      <div className="section-title">
        <h2>📍 နောက်ဆုံး သိရှိသည့်နေရာ</h2>
        <p>Find My မှ နောက်ဆုံးရရှိခဲ့သော Location</p>
      </div>

      <div className="latest-location-card">
        <div className="latest-header">
          <div>
            <h3>{latestLocation.date}</h3>
            <p>Latest Update</p>
          </div>

          <span className="latest-badge">
            <Navigation size={14} />
            Last Known
          </span>
        </div>

        <div className="latest-body">
          <MapPin size={22} />

          <div>
            <h4>{latestLocation.address}</h4>
            <p>{latestLocation.description}</p>
          </div>
        </div>

        <div className="latest-actions" style={{ marginTop: "1.5rem", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
          <button 
            className="btn btn-secondary btn-sm see-location-btn" 
            onClick={() => setShowPicture(!showPicture)}
          >
            see location picture
          </button>
        </div>

        {showPicture && (
          <div className="location-picture-container">
            <div className="location-picture-card">
                 <img 
                    src={shwe} 
                    alt="Latest Location" 
                    style={{ width: "100%", height: "180px", borderRadius: "8px", objectFit: "cover", border: "1px solid var(--border)" }} 
                  />
              <span className="location-picture-label" style={{ display: "block", fontSize: "0.75rem", color: "var(--text)", marginTop: "0.5rem", fontWeight: "500", textAlign: "center" }}>
                နောက်ဆုံး အချက်ပြမှုတွေ့ရှိရာ တည်နေရာမြေပုံ 
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}