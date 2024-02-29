export function retrieveGetParameters(): { [key: string]: string[] } {
  if (document.location.search.length > 0) {
    const result: { [key: string]: string[] } = {};
    const params: String[] = document.location.search
      .substring(1, document.location.search.length)
      .split("&");
    for (const param of params) {
        const [key, value] = param.split("=");
        if (key in result) {
            result[key].push(value);
        } else {
            result[key] = [value];
        }
    }
    return result;
  }

  return {};
}

export function formatString(str: string, values: {[key: string]: string}): string {
  return str.replace(/{(\w+)}/g, (match) => {
    return typeof values[match] != 'undefined'
      ? values[match]
      : match;
  }
  )
}