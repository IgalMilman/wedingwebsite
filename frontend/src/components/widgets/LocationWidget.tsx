import * as React from "react";
import { BasicProps } from "../../common/BasicProps";
import { Address } from "../../data/Address";
import { IntlShape, useIntl } from "react-intl";
import { renderMessage } from "../../common/BuildMessageDescriptior";
import { AutoScaleMaterialRow } from "../../common/AutoScaleMaterialRow";
import { AutoScaleMaterialColumn } from "../../common/AutoScaleMaterialColumn";
import { Typography } from "@mui/material";

interface LocationWidgetProps extends BasicProps {
    title?: string;
    address: Address;
    mapsLink: string;
    widgetLink?: string;
}

export const LocationWidget = (props: LocationWidgetProps) => {
    const intl = useIntl();
    return (
        <AutoScaleMaterialRow>
            <AutoScaleMaterialColumn>
                {props.title && <AutoScaleMaterialRow><Typography variant="h3">{renderMessage(intl, props.title)}</Typography></AutoScaleMaterialRow>}
                <LocationRenderer intl={intl} address={props.address} />
                <AutoScaleMaterialRow><a href={props.mapsLink} className="textView" target="_blank" rel="noreferrer">{renderMessage(intl, "VIEW_ON_G_MAPS")}</a></AutoScaleMaterialRow>
                {props.widgetLink && <AutoScaleMaterialRow><iframe title={props.title} src={props.widgetLink} width="100%" height="450" allowFullScreen></iframe></AutoScaleMaterialRow>}
            </AutoScaleMaterialColumn>
        </AutoScaleMaterialRow>
    );
}

interface LocationRendererProps {
    intl: IntlShape;
    address: Address;
}

const LocationRenderer = (props: LocationRendererProps) => {
    return (
        <>
            <AutoScaleMaterialRow><Typography className="textView" variant="body1">{renderMessage(intl, "ADDRESS")}: {props.address.addressLine1}</Typography></AutoScaleMaterialRow>
                {props.address.addressLine2 && <AutoScaleMaterialRow><Typography className="textView" variant="body1">{props.address.addressLine2}</Typography></AutoScaleMaterialRow>}
                <AutoScaleMaterialRow><Typography className="textView" variant="body1">
                {props.address.city && <>{props.address.city}, </>}
                {props.address.state && <>{props.address.state}, </>}
                {props.address.zip && <>{props.address.zip}, </>}
                {props.address.country}
                </Typography></AutoScaleMaterialRow>
        </>
    )
}