import { MessageDescriptor, IntlShape } from "react-intl";

const buildMessageDescriptor = (
  tranlationId: string,
  defaultMessage?: string
): MessageDescriptor => {
  if (defaultMessage) {
    return { id: tranlationId, defaultMessage: defaultMessage };
  } else {
    return { id: tranlationId, defaultMessage: "" };
  }
};

export const renderMessage = (
    intl: IntlShape,
    translationId: string,
    defaultMessage?: string
): string => {
    return intl.formatMessage(
        buildMessageDescriptor(translationId, defaultMessage)
    );
}

// export const renderError = (
//   intl: IntlShape,
//   errorMessage: ErrorDescription
// ): string => {
//   return intl.formatMessage(
//     buildMessageDescriptor(errorMessage.code, errorMessage.code),
//     errorMessage.args ?? {}
//   );
// };
