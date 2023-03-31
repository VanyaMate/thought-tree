import React, {ReactElement, useMemo, useState} from 'react';
import ColorThemeContainer from "../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './EntityTextarea.module.scss';
import {IDefaultComponent} from "../IDefaultComponent";
import EntityTextareaItem from "./EntityTextareaItem/EntityTextareaItem";

const entityTextareaDataRegexp = /\(&\)(.*?)\(&\)/g;

export interface IEntityTextarea extends IDefaultComponent {
    value: string
}

const EntityTextarea: React.FC<IEntityTextarea> = React.forwardRef<HTMLDivElement, IEntityTextarea>((props: IEntityTextarea, ref) => {
    const [text, setText]= useState<string>(props.value);
    const texts: string[] = useMemo(() => text.split(entityTextareaDataRegexp), [text]);
    const result: ReactElement[] = useMemo(() => {
        const results = [];

        for (let i = 0; i < texts.length; i++) {
            try {
                const json = JSON.parse(texts[i]);
                results[i] = <EntityTextareaItem key={i} value={json.title}/>
            } catch {
                results[i] = <EntityTextareaItem key={i} value={texts[i]}/>
            }
        }

        return results;
    }, [texts]);

    const onChange = function (e: React.FormEvent<HTMLDivElement>) {
        const target = e.target as HTMLDivElement;
        setText(target.textContent!);
    }

    return (
        <ColorThemeContainer themeStyles={css} className={[css.container, props.className ?? ''].join(' ')}>
            { result }
        </ColorThemeContainer>
    );
});

export default React.memo(EntityTextarea);