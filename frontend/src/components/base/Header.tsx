import * as React from "react";
import { BasicProps } from "../../common/BasicProps";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MenuData } from "./menu/MenuItem";
import { ApplicationMode } from "../../common/ApplicationMode";
import { LocaleSelector } from "./locale/LocaleSelector";
import { renderMessage } from "../../common/BuildMessageDescriptior";
import { useIntl } from "react-intl";

interface HeaderProps extends BasicProps {
    title?: string;
    menuItems?: MenuData[];
    changeApplicationModeAction: (mode: ApplicationMode) => void;
    changeLocale?: (locale: string) => void;
}

export const Header = (props: HeaderProps): JSX.Element => {
    const intl = useIntl();
    return <Box className="header" sx={{ flexGrow: 1 }}>
    <AppBar position="static" className="limit-padding header">
        <Toolbar>
            <Typography textAlign='right' variant="h5" component="div" sx={{ flexGrow: 1 }}>
                {""}
            </Typography>
            <Typography textAlign='center' variant="h2" component="div" sx={{ flexGrow: 1 }}>
                {props.title ? renderMessage(intl, props.title) : ""}
            </Typography>
            <Typography textAlign='right' variant="h5" component="div" sx={{ flexGrow: 1 }}>
                {""}
            </Typography>
            <LocaleSelector {...props}/>
        </Toolbar>
    </AppBar>
</Box>
}