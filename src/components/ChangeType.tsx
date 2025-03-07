import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [qType, getQType] = useState<QuestionType>();
    return (
        <div>
            <Button
                onClick={() => {
                    getQType(
                        qType === "multiple_choice_question"
                            ? "short_answer_question"
                            : "multiple_choice_question"
                    );
                }}
            >
                Change Type
            </Button>
            {qType === "multiple_choice_question"
                ? "Multiple Choice"
                : "Short Answer"}
            .
        </div>
    );
}
