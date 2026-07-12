import "./ProcessTimeLine.css";

import laptop from "../assets/Asus-VivoBook-15-X515EA-lid-1024x638.jpg";
import mobile from "../assets/photo_2026-07-11_19-32-38.jpg";

export default function ItemsPage() {
  const items = [
    {
      type: "📱 Mobile Phone",
      name: "Apple iPhone 16 Pro",
      color: "Black",
      imei: "35 913588 756908",
      serial: "HJQPP4W41X",
      image: mobile,
      details: [
        "Color: Black",
        "IMEI: 35 913588 756908",
        "Serial Number: HJQPP4W41X",
      ],
    },
    {
      type: "💻 Laptop",
      name: "ASUS VivoBook X515EA / V5200EA",
      image: laptop,
      details: [
        "Device Name: DESKTOP-EICF1N4",
        "OS: Windows 11 Professional",
        "Version: 2009",
        "OS Build: 10.0.26200.8655",
        "RAM: 16 GB",
        "Serial Number: MCN0CV18N50651A",
      ],
    },
  ];

  return (
    <section id="items" className="items-section">
      <div className="section-title">
        <h2>ပျောက်ဆုံးသွားသော ပစ္စည်းများ</h2>
        <p>ခိုးယူခံရသော ပစ္စည်းများ၏ အသေးစိတ်အချက်အလက်များ</p>
      </div>

      <div className="timeline-container">
        {items.map((item, idx) => (
          <div key={idx} className="timeline-card">
            <div className="timeline-header">
              <span className="step-badge">{item.type}</span>
            </div>

            <div className="timeline-body">
              <div className="item-content">
                <div className="item-image">
                  <img src={item.image} alt={item.name} width={200} />
                </div>

                <div className="item-info">
                  <h3>{item.name}</h3>

                  {item.color && (
                    <p>
                      <strong>Color:</strong> {item.color}
                    </p>
                  )}

                  {item.imei && (
                    <p>
                      <strong>IMEI:</strong>{" "}
                      <code>{item.imei}</code>
                    </p>
                  )}

                  {item.serial && (
                    <p>
                      <strong>Serial Number:</strong>{" "}
                      <code>{item.serial}</code>
                    </p>
                  )}

                  <ul className="item-details">
                    {item.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}