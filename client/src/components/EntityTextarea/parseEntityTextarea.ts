const entityTextareaDataRegexp = /\(&-\)(.*?)\(-&\)/g;

export const parseEntityTextarea = function (text: string): string[] {
    let results: string[] = [];
    let amount = 0;
    let start = 0;

    for (let i = 0; i < text.length - 2; i++) {
        if (
            text[i] === '(' &&
            text[i + 1] === '&' &&
            text[i + 2] === '-'
        ) {
            if (amount === 0) {
                results.push(text.slice(start, i));

                i += 4
                start = i;
            }

            amount += 1;
        }

        if (
            text[i] === '-' &&
            text[i + 1] === '&' &&
            text[i + 2] === ')'
        ) {
            amount -= 1;

            if (amount === 0) {
                results.push(text.slice(start, i - 1));

                i += 3;
                start = i;
            }
        } else if (text[i + 3] === undefined) {
            results.push(text.slice(start, i + 3));
            break;
        }
    }

    return results;
}