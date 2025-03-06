import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answer, showAnswer] = useState<boolean>(false);
    return (
        <span>
            <Button
                onClick={() => {
                    showAnswer(!answer);
                }}
            >
                Reveal Answer
            </Button>
            {answer && <div>42</div>}.
        </span>
    );
}
