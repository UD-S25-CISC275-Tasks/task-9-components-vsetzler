import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [dieA, rollA] = useState<number>(1);
    const [dieB, rollB] = useState<number>(6);
    return (
        <div>
            <span data-testid="left-die">
                <Button
                    onClick={() => {
                        rollA(d6());
                    }}
                >
                    Roll Left
                </Button>
                {dieA}
            </span>
            <span data-testid="right-die">
                <Button
                    onClick={() => {
                        rollB(d6());
                    }}
                >
                    Roll Right
                </Button>
                {dieB}
            </span>
            <div>
                {dieA === dieB ? (
                    dieA != 1 ? (
                        <div>Win</div>
                    ) : (
                        <div>Lose</div>
                    )
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
