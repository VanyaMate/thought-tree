import React, {ReactElement, useMemo, useState} from "react";
import EntityTextareaItem from "../components/EntityTextarea/EntityTextareaItem/EntityTextareaItem";
import EntityTextarea from "../components/EntityTextarea/EntityTextarea";
import {parseEntityTextarea} from "../components/EntityTextarea/parseEntityTextarea";
import {EntityTextareaComponent} from "../types/entityTextareaComponent";
import EntityTextareaColor from "../components/EntityTextarea/EntityTextareaColor/EntityTextareaColor";
import EntityTextareaScrollButton
    from "../components/EntityTextarea/EntityTextareaScrollButton/EntityTextareaScrollButton";

export const useEntityTextareaHook = function (value: string): ReactElement[] {
    const [text, setText]= useState<string>(value);
    const texts: string[] = useMemo(() => parseEntityTextarea(text), [text]);

    return useMemo<ReactElement[]>(() => {
        const results: ReactElement[] = [];

        for (let i = 0; i < texts.length; i++) {
            try {
                const json = JSON.parse(texts[i]);

                switch (json.type) {
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
                results[i] = <EntityTextareaItem key={i} value={texts[i]}/>
            }
        }

        return results;
    }, [texts]);
}