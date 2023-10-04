import React from "react";
import "../CSS/footer.css";

const servicesData = [
  {
    title: "Heating:",
    items: ["Heating Services", "Furnace Repair", "Furnace Replacement", "Furnace Installation"],
  },
  {
    title: "Ventilation:",
    items: ["Air Duct Cleaning", "Air Duct Replacement", "Dryer Vent Repair"],
  },
  {
    title: "Air Conditioning:",
    items: ["AC Services", "AC Repair", "AC Replacement", "AC Installation"],
  },
];

const hoursData = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function footerPage() {
  return (
    <footer>
      <div className="footer">
        {servicesData.map((section, index) => (
          <div key={index}>
            <h4>{section.title}</h4>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4>Hours:</h4>
          <ul>
            {hoursData.map((day, dayIndex) => (
              <li key={dayIndex}>{day}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact Us:</h4>
          <p>San Jose:</p>
        </div>
      </div>
    </footer>
  );
}

export default footerPage;
