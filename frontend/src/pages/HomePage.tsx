import * as React from 'react';
import { ApplicationMode } from '../common/ApplicationMode';
import { AppStatus } from '../common/AppStatus';
import { PageProps } from '../common/BasicProps';
import { BaseOutlay } from '../components/base/BaseOutlay';
import { IntlWrapper } from '../internationalization/IntlWrapper';
import { QandASection } from '../components/sections/QandASection';
import { ScheduleSection } from '../components/sections/ScheduleSection';
import { LocationSection } from '../components/sections/LocationSection';
import { GiftsSection } from '../components/sections/GiftsSection';

interface HomePageProps extends PageProps {
    id?: string;
}

export const HomePage = (props: HomePageProps): JSX.Element => {
    const appStatus = new AppStatus(ApplicationMode.Homepage);
    return <IntlWrapper>
        <BaseOutlay appStatus={appStatus} title={"OUR_WEDDING_TITLE"}>
            <>
                <ScheduleSection appStatus={appStatus} />
                <LocationSection appStatus={appStatus} />
                <GiftsSection appStatus={appStatus} />
                <QandASection appStatus={appStatus} />
            </>
        </BaseOutlay>
    </IntlWrapper>
}
