import * as React from "react";
import { BasicProps } from "../../common/BasicProps";
import { Header } from "./Header";
import { MainView } from "./MainView";

interface BaseOutlayProps extends BasicProps {
    title?: string;
    children?: JSX.Element;
}

export const BaseOutlay = (props: BaseOutlayProps): JSX.Element => {
    return <MainView>
            <Header changeApplicationModeAction={() => { }} {...props} />
            {props.children}
        </MainView>
}
