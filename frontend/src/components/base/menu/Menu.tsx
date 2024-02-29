import * as React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MaterialMenu from '@mui/material/Menu';
import { MenuItem, MenuData } from './MenuItem'
import { ApplicationMode } from '../../../common/ApplicationMode';
import { BasicProps } from '../../../common/BasicProps';

export interface MenuProps extends BasicProps {
    items: MenuData[];
    changeApplicationModeAction: (mode: ApplicationMode) => void;
}

export const Menu = (props: MenuProps): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: { currentTarget: any; }) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleItemClick = (mode: ApplicationMode) => {
        props.changeApplicationModeAction(mode);
        handleClose();
    }
    return (<>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
        >
            <MenuIcon />
        </IconButton>
        <MaterialMenu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
        >
            {props.items.map(
                (menuData, index) => (
                    <MenuItem key={index.toString()} data={menuData} selected={menuData.mode === props.appStatus.mode}
                        onClick={handleItemClick} />
                )
            )}
        </MaterialMenu>
    </>)
}
