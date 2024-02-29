import * as React from "react";
import { BasicProps } from "../../common/BasicProps";
import { useIntl } from "react-intl";
import { renderMessage } from "../../common/BuildMessageDescriptior";
import { AutoScaleMaterialRow } from "../../common/AutoScaleMaterialRow";
import { AutoScaleMaterialColumn } from "../../common/AutoScaleMaterialColumn";
import { Typography } from "@mui/material";

interface QuestionWidgetProps extends BasicProps {
    question: string;
    answer: string[];
}

export const QuestionWidget = (props: QuestionWidgetProps) => {
    const intl = useIntl();
    return (
        <AutoScaleMaterialRow>
            <AutoScaleMaterialColumn>
            <AutoScaleMaterialRow><Typography variant="h5">{renderMessage(intl, props.question)}</Typography></AutoScaleMaterialRow>
            {props.answer.map((value, index)=><AutoScaleMaterialRow key={index}><Typography className="textView" variant="body1">{renderMessage(intl, value)}</Typography></AutoScaleMaterialRow>)}
            </AutoScaleMaterialColumn>
        </AutoScaleMaterialRow>
    );
}