import * as React from "react";
import { BasicProps } from "../../common/BasicProps";
import { useIntl } from "react-intl";
import { renderMessage } from "../../common/BuildMessageDescriptior";
import { AutoScaleMaterialRow } from "../../common/AutoScaleMaterialRow";
import { AutoScaleMaterialColumn } from "../../common/AutoScaleMaterialColumn";
import { Typography } from "@mui/material";

interface SectionHeaderWidgetProps extends BasicProps {
    title: string;
    locator?: string;
}

export const SectionHeaderWidget = (props: SectionHeaderWidgetProps) => {
    const intl = useIntl();
    return (
        <AutoScaleMaterialRow>
            <AutoScaleMaterialColumn>
            <AutoScaleMaterialRow id={props.locator}><Typography variant="h3">{renderMessage(intl, props.title)}</Typography></AutoScaleMaterialRow>
            </AutoScaleMaterialColumn>
        </AutoScaleMaterialRow>
    );
}