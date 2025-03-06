import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, changeAttempts] = useState<number>(4);
    const [inProgress, progressStatus] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    changeAttempts(attempts - 1);
                    if (attempts > 0 && !inProgress) {
                        progressStatus(true);
                    }
                    if (attempts === 0) {
                        progressStatus(false);
                    }
                }}
                disabled={!(attempts > 0 && !inProgress)}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    if (
                        (attempts > 0 && inProgress) ||
                        (attempts === 0 && inProgress)
                    ) {
                        progressStatus(false);
                    }
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    if (!inProgress) {
                        changeAttempts(attempts + 1);
                    }
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            {attempts.toString()}
        </div>
    );
}
