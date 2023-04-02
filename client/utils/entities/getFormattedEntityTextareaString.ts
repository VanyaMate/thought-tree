export const getFormattedEntityTextareaString = function (element: HTMLElement): string {
    return ([...element.children] as HTMLElement[]).map((child: HTMLElement) => {
        const type = child.getAttribute('data-entity-type');
        const data = child.getAttribute('data-entity-data');
        if (type) {
            return `(&-)${JSON.stringify({
                value: getFormattedEntityTextareaString(child), type, data: (data && JSON.parse(data))
            })}(-&)`
        } else if (child.getAttribute('data-entity-item')) {
            return child.textContent;
        } else {
            return getFormattedEntityTextareaString(child)
        }
    }).join('')
}