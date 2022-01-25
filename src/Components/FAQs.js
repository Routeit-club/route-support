import { useState } from "react";
import "./FAQs.css";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function FAQs() {
  const [faqItemList, setFaqItemList] = useState([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
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
    </div>
  );
}
