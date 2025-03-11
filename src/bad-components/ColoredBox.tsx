import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface colorProps {
    colorIndex: number;
    setColorIndex: (newIndex: number) => void;
}

function ChangeColor({
    colorIndex,
    setColorIndex,
}: colorProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({
    colorIndex,
    setColorIndex,
}: colorProps): React.JSX.Element {
    setColorIndex(colorIndex);
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <div>
                    <ChangeColor
                        colorIndex={colorIndex}
                        setColorIndex={setColorIndex}
                    ></ChangeColor>
                </div>
                <div>
                    <ColorPreview
                        colorIndex={colorIndex}
                        setColorIndex={setColorIndex}
                    ></ColorPreview>
                </div>
            </div>
        </div>
    );
}
