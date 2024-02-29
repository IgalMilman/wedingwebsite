import * as React from "react";
import { BasicProps } from "../../common/BasicProps";
import { SectionBase } from "./SectionBase";
import { useIntl } from "react-intl";
import { Typography } from "@mui/material";
import { renderMessage } from "../../common/BuildMessageDescriptior";
import { AutoScaleMaterialRow } from "../../common/AutoScaleMaterialRow";

interface GiftsSectionProps extends BasicProps {
}

export const GiftsSection = (props: GiftsSectionProps) => {
    const intl = useIntl();
    return (
        <SectionBase appStatus={props.appStatus} title="GIFTS" locator="Location">
            <AutoScaleMaterialRow>
            <Typography className="textView" variant="body1">{renderMessage(intl, "GIFTS_P_1")}</Typography>
            <Typography className="textView" variant="body1">{renderMessage(intl, "GIFTS_P_2")}</Typography>
            </AutoScaleMaterialRow>
        </SectionBase>
    );
}