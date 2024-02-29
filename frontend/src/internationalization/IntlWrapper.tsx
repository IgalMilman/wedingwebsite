import * as React from "react";
import * as dayjs from "dayjs";
import * as rudayjs from "dayjs/locale/ru";
import { createIntl, createIntlCache, RawIntlProvider, IntlShape } from "react-intl";
import * as USEnglish from "../../../translations/en_US.json";
import * as RURussian from "../../../translations/ru_RU.json";
import { LocalizationProvider, ruRU, enUS } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { retrieveGetParameters } from "../common/RequiredMethods";

interface IntlWrapperProps {
    locale?: string;
    children?: JSX.Element;
}

declare global {
    var locale: string;
    var setLocale: (locale: string) => void;
    var intl: IntlShape;
    var testv: any;
}

const supportedLocales = ["en-US", "ru-RU"];

const langToLocale: {[key: string]: string} = {
    "en": "en-US",
    "ru": "ru-RU"
}

const localeToLang: {[key: string]: string} = {
    "en-US": "en",
    "ru-RU": "ru"
}

function getDateFormat(intl: IntlShape): string {
    return intl.formatDateToParts(Date.now()).map(
        (value => {
            switch (value.type) {
                case ("day"):
                    return "DD";
                case ("month"):
                    return "MM";
                case ("year"):
                    return "YYYY";
                default:
                    return value.value;
            }
        })
    ).join("");
}

export const IntlWrapper = (props: IntlWrapperProps) => {
    const [locale, setLocaleValue] = React.useState<string>(getLocale(props));

    const setLocale = (newLocale: string) => {
        if (supportedLocales.includes(newLocale)) {
            const lang = localeToLang[newLocale];
            // eslint-disable-next-line no-restricted-globals
            history.replaceState(null, "", `?lang=${lang}`);
            setLocaleValue(newLocale);
        }
    }

    globalThis.locale = locale;
    globalThis.setLocale = setLocale;
    let messages = {};
    let lpObject = enUS;
    if (locale === "en-US") {
        messages = USEnglish;
    } else if (locale === "ru-RU") {
        messages = RURussian;
        lpObject = ruRU;
        const tmp = rudayjs;
    }
    dayjs.locale(locale);
    const cache = createIntlCache();
    const intl: IntlShape = createIntl({ locale, messages }, cache);
    globalThis.intl = intl;
    globalThis.testv = dayjs;
    return <RawIntlProvider value={intl}>
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={lpObject.components.MuiLocalizationProvider.defaultProps.localeText}
            dateFormats={
                { "keyboardDate": dayjs.Ls[dayjs.locale()].formats.L }
            }>
            {props.children}
        </LocalizationProvider>
    </RawIntlProvider>
} 


function getLocale(props: IntlWrapperProps): string {
    if (props.locale && supportedLocales.includes(props.locale)) {
        return props.locale;
    }
    const getParameters = retrieveGetParameters();
    if (getParameters.lang && getParameters.lang.length > 0 && getParameters.lang[0] in langToLocale) {
        return langToLocale[getParameters.lang[0]];
    }
    return "en-US";
}