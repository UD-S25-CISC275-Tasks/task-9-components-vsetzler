import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday =
    | "New_Years"
    | "Spring_Equinox"
    | "Summer_Solstice"
    | "Autumnal_Equinox"
    | "Winter_Solstice";

const shiftAlphabet: Record<Holiday, Holiday> = {
    Autumnal_Equinox: "New_Years",
    New_Years: "Spring_Equinox",
    Spring_Equinox: "Summer_Solstice",
    Summer_Solstice: "Winter_Solstice",
    Winter_Solstice: "Autumnal_Equinox"
};

const shiftYear: Record<Holiday, Holiday> = {
    New_Years: "Spring_Equinox",
    Spring_Equinox: "Summer_Solstice",
    Summer_Solstice: "Autumnal_Equinox",
    Autumnal_Equinox: "Winter_Solstice",
    Winter_Solstice: "New_Years"
};

const holidaySymbol: Record<Holiday, string> = {
    New_Years: "🎆",
    Spring_Equinox: "🌱",
    Summer_Solstice: "☀️",
    Autumnal_Equinox: "🍂",
    Winter_Solstice: "❄️"
};

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, changeHoliday] = useState<Holiday>("New_Years");
    //shifting functions
    function shiftByAlphabet(): void {
        const alphaShift = shiftAlphabet[currentHoliday];
        changeHoliday(alphaShift);
    }
    function shiftByYear(): void {
        const yearShift = shiftYear[currentHoliday];
        changeHoliday(yearShift);
    }
    //Two buttons: one for alphabetic, one for chronologic
    return (
        <div>
            Holiday: {holidaySymbol[currentHoliday]}
            {
                // <span>
                //     {currentHoliday === "New_Years"?"🎆":{currentHoliday === Winter_Solstice?"❄️":{currentHoliday ==="Spring_Equinox"?"🌱":{currentHoliday ==="Summer_Solstice"?"☀️":"🍂"}}}
                // </span>}
            }
            <div></div>
            <Button
                onClick={() => {
                    //alphabetic
                    shiftByAlphabet();
                }}
            >
                Advance by Alphabet
            </Button>
            <span> </span>
            <Button
                onClick={() => {
                    //chronologic
                    shiftByYear();
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
