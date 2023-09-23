import React from "react";
import "../CSS/footer.css"

function footerPage() {
    return (
        <footer>
            <div className="footer">
                <div>
                    <h4>Heating:</h4>
                    <ul>
                        <li>Heating Services</li>
                        <li>Furnace Repair</li>
                        <li>Furnace Replacement</li>
                        <li>Furnace Installation</li>
                    </ul>
                </div>
                <div>
                    <h4>Ventilation:</h4>
                    <ul>
                        <li>Air Duct Cleaning</li>
                        <li>Air Duct Replacement</li>
                        <li>Dryer Vent Repair</li>
                    </ul>
                </div>
                <div>
                    <h4>Air Conditioning:</h4>
                    <ul>
                        <li>AC Services</li>
                        <li>AC Repair</li>
                        <li>AC Replacement</li>
                        <li>AC Installation</li>
                    </ul>
                </div>
                <div>
                    <h4>Hours:</h4>
                    <ul>
                        <li>Monday</li>
                        <li>Tuesday</li>
                        <li>Wednesday</li>
                        <li>Thursday</li>
                        <li>Friday</li>
                        <li>Saturday</li>
                        <li>Sunday</li>
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
