import * as React from 'react'
import { ApplicationMode } from '../../../common/ApplicationMode';
import StyledMaterialMenuItem from '../../styled/MaterialMenuItem';

interface MenuItemProps {
    data: MenuData;
    selected?: boolean;
    onClick: (mode:ApplicationMode) => void;
}

export interface MenuData {
    icon?: any;
    name?: string,
    mode?: ApplicationMode,
    additionalClickAction?: ()=> void;
};

export function MenuItem(props: MenuItemProps): JSX.Element {
    const onClick = ()=>{
        props.data?.mode && props.onClick(props.data.mode);
        if (props.data?.additionalClickAction) {
            props.data.additionalClickAction();
        }
    }
    return (
        <StyledMaterialMenuItem selected={props.selected} onClick={onClick} >
            {props.data?.icon}
            {props.data?.name}
        </StyledMaterialMenuItem>
    )
}