import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import * as React from 'react';
import { useIntl } from 'react-intl';
import { BasicProps } from '../../../common/BasicProps';
import { renderMessage } from '../../../common/BuildMessageDescriptior';

interface LocaleSelectorProps extends BasicProps {

}

declare global {
    var locale: string;
    var setLocale: (locale: string) => void;
}

export const LocaleSelector = (props: LocaleSelectorProps): JSX.Element => {
    const intl = useIntl();
    const selectionOfLanguages = {
        "en-US": "English",
        "ru-RU": "Русский"
    };

    const setLocale = (event: SelectChangeEvent<string>): void => {
        globalThis.setLocale(event.target.value);
    }

    return <Select
        id="languageDropdownSelector"
        value={globalThis.locale}
        label={renderMessage(intl, "LANGUAGE_SELECTOR_LABEL", "Select a langauge")}
        onChange={setLocale}
        className="langSelector"
    >
        {Object.entries(selectionOfLanguages).map(([locale, label], index) => <MenuItem key={index} value={locale}>{label}</MenuItem>)}
    </Select>
}