import * as React from "react";
import { BasicProps } from "../../common/BasicProps";
import { SectionBase } from "./SectionBase";
import { QuestionWidget } from "../widgets/QuestionWidget";
import { useIntl } from "react-intl";
import { LocationWidget } from "../widgets/LocationWidget";
import { Address } from "../../data/Address";

interface QandASectionProps extends BasicProps {
}

export const QandASection = (props: QandASectionProps) => {
    const intl = useIntl();
    return (
        <SectionBase appStatus={props.appStatus} title="QUESTIONS_AND_ANSWERS" locator="Q&A">
            <QuestionWidget
                appStatus={props.appStatus}
                question="CAN_I_BRING_KIDS"
                answer={["CAN_I_BRING_KIDS_ANSWER_1", "CAN_I_BRING_KIDS_ANSWER_2"]}
            />
            <QuestionWidget
                appStatus={props.appStatus}
                question="WHEN_RSVP_Q"
                answer={["WHEN_RSVP_A"]}
            />
            <QuestionWidget
                appStatus={props.appStatus}
                question="WHAT_IS_VEN_LIKE_Q"
                answer={["WHAT_IS_VEN_LIKE_A"]}
            />
            <QuestionWidget
                appStatus={props.appStatus}
                question="WHAT_SHOULD_I_WEAR_Q"
                answer={["WHAT_SHOULD_I_WEAR_A"]}
            />
            <QuestionWidget
                appStatus={props.appStatus}
                question="WHERE_TO_PARK_Q"
                answer={["WHERE_TO_PARK_A"]}
            />
            <QuestionWidget
                appStatus={props.appStatus}
                question="WHAT_EXPECT_RECEPTION_Q"
                answer={["WHAT_EXPECT_RECEPTION_A"]}
            />
            <QuestionWidget
                appStatus={props.appStatus}
                question="WHERE_TO_STAY_Q"
                answer={["WHERE_TO_STAY_A"]}
            />
            <LocationWidget
                appStatus={props.appStatus}
                address={new Address(
                    "2 John Walsh Blvd", undefined, "Peekskill", "NY", "10566"
                )}
                mapsLink="https://maps.app.goo.gl/vMLdUBFxsfn38xD8A"
                widgetLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.4297765099486!2d-73.94127732275987!3d41.27775000278687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2cf4baf2446bd%3A0xb58151119d2b49ba!2sHoliday%20Inn%20Express%20%26%20Suites%20Peekskill-Lower%20Hudson%20Valley%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sus!4v1709171655692!5m2!1sen!2sus"
            />
        </SectionBase>
    );
}