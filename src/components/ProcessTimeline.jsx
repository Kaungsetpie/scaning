import React from "react";
import './ProcessTimeLine.css'

export default function IncidentReport() {
  const incidentDetails = [
    {
      title: "အချိန်၊နေရာ",
      content: "Date - 7/7/2026 - မနက်8နာရီဝန်းကျင်။မရမ်းကုန်းမြိုနယ်၊အမှတ်(၂) ရပ်ကွက်။ဦးဘအိုလမ်း။"
    },
    
    {
      title: "ဖြစ်စဉ်",
      content:
        "တိုက်ခန်းတွင် လူသုံးယောက် နေထိုင်ပါသည်။ ဖြစ်စဉ်ဖြစ်ပွားချိန်တွင် ကျွန်တော်သည် အိပ်နေပါသည်။ အဖော်တစ်ဦးသည် ရေချိုးနေပြီး၊ အခြားတစ်ဦးမှာ ရုံးသွားရန်အတွက် တံခါးကို သော့မခတ်ဘဲ ထားခဲ့ကြောင်း သိရှိရပါသည်။"
    },
    {
      title: "ပစ္စည်းပျောက်ဆုံးမှု သိရှိခြင်း",
      content:
        "ရေချိုးနေသော အဖော်မှ အခြေအနေကို သတိပြုမိပြီး ကျွန်တော်အား နှိုး၍ အသိပေးခဲ့သဖြင့် ပစ္စည်းများ ပျောက်ဆုံးနေကြောင်း သိရှိခဲ့ပါသည်။ရုံးသွားသော အခန်းဖော် ရုံးသွားချိန်မှာ 7:45 ဝန်းကျင်ဟု သိရသည်။ ပစ္စည်းပျောက်ဆုံးသည်ကို 8:12 လောက်တွင် စတင်သိရပါသည်။ iCloud တွင် 8:30 ဝန်းကျင်လောက်တွင် စတင်ခြေရာခံမိပါသည်။ ပိုက်ဆံအိတ်၊ ကျွန်တော်၏အခြားဖုန်းတလုံးနှင့် နာရီများကို ချန်ခဲ့ပါသည်။"
    },
    {
      title: "ပျောက်ဆုံးသော ပစ္စည်းများ",
      items: [
        "ကျွန်တော်၏ မိုဘိုင်းဖုန်းတစ်လုံး",
        "ကျွန်တော်၏ Laptop တလုံး",
        "အဖော်၏ မိုဘိုင်းဖုန်းတစ်လုံး"
      ]
    },
    {
      title: "သံသယရှိသူ",
      content:
        "ဖြစ်စဉ်နှင့် ပတ်သက်၍ သံသယရှိသူတစ်ဦးကို တွေ့ရှိထားပါသည်။ သံသယရှိသူနှင့် ပတ်သက်သော CCTV မှတ်တမ်းများလည်း ရရှိထားပါသည်။ ပစ္စည်းပျောက်ပြီးပြီးချင်းတွင် location မှာကျိုက်ဝိုင်းဘုရားဘမ်းထိဆက်တိုက်ပေါ်နေ၍ ကျန်ရက်များမှာ ခဏသာ active ဖြစ်ချင်းဖြစ်သည်",
      link: "https://drive.google.com/drive/folders/1vLKo0ddsYqVQCV7MZ8QziGg0iCMh2A--"
    },
    {
      title: "အထောက်အထားများ",
      items: [
        "CCTV မှတ်တမ်းများ",
        "ဖြစ်စဉ်ဖြစ်ပွားချိန် အချက်အလက်များ",
        "ပျောက်ဆုံးသော ဖုန်းများ၏ အချက်အလက်များ",
        "ရရှိထားသော အချက်အလက်များနှင့် အထောက်အထားများကို သက်ဆိုင်ရာ အာဏာပိုင်များ စစ်ဆေးနိုင်ရန် စုစည်းထားပါသည်။"
      ],
      link: "https://drive.google.com/drive/folders/1vLKo0ddsYqVQCV7MZ8QziGg0iCMh2A--"
    }
   
  ];

  return (
    <section className="process-section" id="process">
      <div className="section-title">
        <h2>Theft Incident Report</h2>
        <p>Victim Info</p>
        <p>Kaung Set Paing <br />
          Mandalay Computer ကျောင်းမှ ကျောင်းပီးမြောက်ရန်အတွက် Yangon တွင်  ၂လ (April 10 -July 10)အလုပ်သင် လာဆင်းရန် Share Room တွင်နေထိုင်စင်ဖြစ်ပွားခြင်း
        </p>
      </div>

      <div className="timeline-container">
        {incidentDetails.map((section, index) => (
          <div className="timeline-card" key={index}>
            <div className="timeline-header">
              <span className="step-badge">
                Step {index + 1}
              </span>

              <span className="step-time">
                Evidence
              </span>
            </div>

            <div className="timeline-body">
              <h3>{section.title}</h3>

              {section.content && (
                <p>{section.content}</p>
              )}

              {section.items && (
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.link && (
                <div style={{ marginTop: "1rem" }}>
                  <a 
                    href={section.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="see-location-btn"
                    style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
                  >
                    မှတ်တမ်းများကြည့်ရန်
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}