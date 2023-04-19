import React, {ReactElement, useEffect, useMemo, useState} from "react";
import EntityTextareaItem from "../components/Entity/EntityTextarea/EntityTextareaItem/EntityTextareaItem";
import EntityTextarea from "../components/Entity/EntityTextarea/EntityTextarea";
import {parseEntityTextarea} from "../components/Entity/EntityTextarea/parseEntityTextarea";
import {EntityTextareaComponent} from "../types/entityTextareaComponent";
import EntityTextareaColor from "../components/Entity/EntityTextarea/EntityTextareaColor/EntityTextareaColor";
import EntityTextareaScrollButton
    from "../components/Entity/EntityTextarea/EntityTextareaScrollButton/EntityTextareaScrollButton";

export const useEntityTextareaHook = function (value: string, entityId: number, onValueChange?: (id: number, value: string) => void): ReactElement[] {
    const [text, setText] = useState<string>(value);

    useEffect(() => {
        if (value !== text) {
            setText(value);
        }
    }, [value])

    const texts: string[] = useMemo(() => parseEntityTextarea(text), [text]);

    return useMemo<ReactElement[]>(() => {
        const results: ReactElement[] = [];

        for (let i = 0; i < texts.length; i++) {
            try {
                const json = JSON.parse(texts[i]);

                switch (Number(json.type)) {
                    case EntityTextareaComponent.COLOR:
                        results[i] = <EntityTextareaColor key={i} {...json}/>;
                        break
                    case EntityTextareaComponent.SCROLL_BUTTON:
                        results[i] = <EntityTextareaScrollButton key={i} {...json}/>
                        break;
                    default:
                        results[i] = <EntityTextarea key={i} {...json}/>;
                        break;
                }

            } catch {
                results[i] = <EntityTextareaItem key={i} value={texts[i]} id={entityId} onValueChange={onValueChange}/>
            }
        }

        return results;
    }, [texts]);
}