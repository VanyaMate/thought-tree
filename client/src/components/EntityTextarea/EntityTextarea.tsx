import React, {ReactElement, useMemo, useState} from 'react';
import ColorThemeContainer from "../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './EntityTextarea.module.scss';
import {IDefaultComponent} from "../IDefaultComponent";

const entityTextareaDataRegexp = /\(&\)(.*?)\(&\)/g;

export interface IEntityTextarea extends IDefaultComponent {
    value: string
}

const EntityTextarea: React.FC<IEntityTextarea> = React.forwardRef<HTMLDivElement, IEntityTextarea>((props: IEntityTextarea, ref) => {
    const [text, setText]= useState<string>(props.value);
    const texts: string[] = useMemo(() => text.split(entityTextareaDataRegexp), [text]);
    const result: ReactElement[] = useMemo(() => {
        const results = [];

        /**
         * TODO: Надо придумать как блин это сделать...
         */
        console.log(text);
        console.log(texts);
        console.log('results change');

        for (let i = 0; i < texts.length; i++) {
            try {
                const json = JSON.parse(texts[i]);
                results[i] = <span key={i} style={{fontSize: 40}}>{json.title}</span>
            } catch {
                results[i] = <span key={i}>{texts[i]}</span>
            }
        }

        console.log(results);

        return results;
    }, [texts]);

    const onChange = function (e: React.FormEvent<HTMLDivElement>) {
        const target = e.target as HTMLDivElement;
        console.log('set text', target.textContent);
        setText(target.textContent!);
    }

    return (
        <ColorThemeContainer themeStyles={css} className={[css.container, props.className ?? ''].join(' ')}>
            <div
                contentEditable={true}
                suppressContentEditableWarning={true} // lol
                ref={ref}
                onKeyUp={onChange}
            >
                { ...result }
            </div>
        </ColorThemeContainer>
    );
});

export default React.memo(EntityTextarea);