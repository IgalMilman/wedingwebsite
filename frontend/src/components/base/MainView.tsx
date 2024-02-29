import * as React from 'react';
import { AutoScaleMaterialRow } from '../../common/AutoScaleMaterialRow';
import { AutoScaleMaterialColumn } from '../../common/AutoScaleMaterialColumn';

export const MainView = (props: any): JSX.Element => {
    return <AutoScaleMaterialColumn
        className='mainview'
        container
        direction="column"
        item
        xs
        alignItems="stretch"
        justifyContent="center"
        spacing={2}>
        <AutoScaleMaterialRow
            className='mainview-row'
            alignItems="flex-start">
            <AutoScaleMaterialColumn
                l={8}
                xl={6}
                xxl={4}
                alignItems="stretch"
                className='content-view'
                spacing={3}
                {...props} />
        </AutoScaleMaterialRow>
    </AutoScaleMaterialColumn>
}