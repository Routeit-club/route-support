import { useState } from "react";
import "./FAQs.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsTelephoneInboundFill } from "react-icons/bs";
export default function FAQs() {
  const [faqItemList, setFaqItemList] = useState([
    0,
    1
    // 2,
    // 3,
    // 4,
    // 5,
    // 6,
    // 7,
    // 8,
    // 9,
    // 10
  ]);
  const FaqItem = () => {
    return (
      <div className="faq-item-container">
        <div style={{ float: "left", width: "95%" }}>
          <span className="title-list-item">
            How do I use Route to Pay? How to install app in the android phone.
          </span>
        </div>
        <div style={{ float: "right", display: "flex", alignItems: "center" }}>
          <span>
            <AiOutlineArrowRight style={{ color: "rgb(126, 124, 124)" }} />
          </span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="faq-title-container">
        <span className="faq-title">FAQs</span>
      </div>
      {faqItemList.map((i) => {
        return <FaqItem />;
      })}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "30px",
            color: "rgb(126, 124, 124)"
          }}
        >
          We are here to help you so please get in touch with us.
        </span>
        <div style={{ marginTop: "30px" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "20px",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                borderRadius: "50%"
              }}
            >
              <BsTelephoneInboundFill style={{ color: "rgb(100, 98, 98)" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  marginLeft: "20px",
                  textAlign: "left",
                  color: "rgb(100, 98, 98)"
                }}
              >
                <div style={{ fontWeight: "bold" }}>Phone Number</div>
                <div style={{ fontWeight: "normal", fontSize: "14px" }}>
                  +91 7550-2500-62
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex",marginTop:"20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "20px",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                borderRadius: "50%"
              }}
            >
              <BsTelephoneInboundFill style={{ color: "rgb(100, 98, 98)" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  marginLeft: "20px",
                  textAlign: "left",
                  color: "rgb(100, 98, 98)"
                }}
              >
                <div style={{ fontWeight: "bold" }}>Email</div>
                <div style={{ fontWeight: "normal", fontSize: "14px" }}>
                  connect@routeit.club
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="route-footer">
        <span className="footer-text">Raise Ticket</span>
      </div>
    </div>
  );
}