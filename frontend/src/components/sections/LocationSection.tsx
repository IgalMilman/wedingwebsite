import * as React from "react";
import { BasicProps } from "../../common/BasicProps";
import { SectionBase } from "./SectionBase";
import { Address } from "../../data/Address";
import { LocationWidget } from "../widgets/LocationWidget";

interface LocationSectionProps extends BasicProps {
}

export const LocationSection = (props: LocationSectionProps) => {
    return (
        <SectionBase appStatus={props.appStatus} title="WEDDING_LOCATION" locator="Location">
            <LocationWidget
                appStatus={props.appStatus}
                address={new Address(
                    "5714 Albany Post Rd", undefined, "Cortlandt", "NY", "10567"
                )}
                mapsLink="https://maps.app.goo.gl/9r1SKCmuQcH4mkeG6"
                widgetLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.1459660822975!2d-73.9279275227591!3d41.305688101057214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2c92fa262f599%3A0xfe0a661a883aeb3d!2sCortlandt%20Colonial%20Restaurant%20%26%20Ballroom!5e0!3m2!1sen!2sus!4v1708810319600!5m2!1sen!2sus"
            />
        </SectionBase>
    );
}