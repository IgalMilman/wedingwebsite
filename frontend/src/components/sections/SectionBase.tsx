import * as React from "react";
import { BasicProps } from "../../common/BasicProps";
import { SectionHeaderWidget } from "../widgets/SectionHeaderWidget";

interface SectionBaseProps extends BasicProps {
    title: string;
    locator?: string;
    children?: React.ReactNode[] | React.ReactNode;
}

export const SectionBase = (props: SectionBaseProps) => {
    return (
        <>
            <SectionHeaderWidget appStatus={props.appStatus} title={props.title}/>
            {props.children && props.children}
        </>
    );
}