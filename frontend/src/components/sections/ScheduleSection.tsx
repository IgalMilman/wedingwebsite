import * as React from "react";
import { BasicProps } from "../../common/BasicProps";
import { SectionBase } from "./SectionBase";
import { useIntl } from "react-intl";
import { AutoScaleMaterialRow } from "../../common/AutoScaleMaterialRow";
import { Typography } from "@mui/material";
import { formatString } from "../../common/RequiredMethods";
import { renderMessage } from "../../common/BuildMessageDescriptior";

interface ScheduleSectionProps extends BasicProps {
}

export const ScheduleSection = (props: ScheduleSectionProps) => {
    const intl = useIntl();
    const beginDT = new Date("2024-04-14T20:30:00.000Z");
    const coctailHourDT = new Date("2024-04-14T21:30:00.000Z");
    const celebrationDT = new Date("2024-04-14T22:30:00.000Z");
    const endDT = new Date("2024-04-15T03:30:00.000Z");
    const parameters = {
        "{startDate}": intl.formatDate(beginDT, {
            dateStyle: "full"
        }),
        "{startTime}": intl.formatTime(beginDT, {
            second: undefined
        }),
        "{endDate}": intl.formatDate(endDT, {
            dateStyle: "full"
        }),
        "{endTime}": intl.formatTime(endDT, {
            second: undefined
        }),
        "{coctailHourTime}": intl.formatTime(coctailHourDT, {
            second: undefined
        }),
        "{ceremonyTime}": intl.formatTime(beginDT, {
            second: undefined
        }),
        "{celebrationTime}": intl.formatTime(celebrationDT, {
            second: undefined
        }),
    }
    return (
        <SectionBase appStatus={props.appStatus} title="SCHEDULE_SECTION_HEADER" locator="Schedule">
            <AutoScaleMaterialRow><Typography className="textView" variant="body1">{formatString(renderMessage(intl, "EVENT_STARTS_PARAGRAPH"), parameters)}</Typography></AutoScaleMaterialRow>
            <AutoScaleMaterialRow><Typography className="textView" variant="body1">{formatString(renderMessage(intl, "CEREMONY_PARAGRAPH"), parameters)}</Typography></AutoScaleMaterialRow>
            <AutoScaleMaterialRow><Typography className="textView" variant="body1">{formatString(renderMessage(intl, "COCTAIL_HOUR_PARAGRAPH"), parameters)}</Typography></AutoScaleMaterialRow>
            <AutoScaleMaterialRow><Typography className="textView" variant="body1">{formatString(renderMessage(intl, "CELEBRATION_PARAGRAPH"), parameters)}</Typography></AutoScaleMaterialRow>
            <AutoScaleMaterialRow><Typography className="textView" variant="body1">{formatString(renderMessage(intl, "SCHEDULE_END_PARAGRAPH"), parameters)}</Typography></AutoScaleMaterialRow>
        </SectionBase>
    );
}