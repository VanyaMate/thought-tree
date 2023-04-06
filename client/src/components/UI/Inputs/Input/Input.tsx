import React from 'react';
import ColorThemeContainer from "../../../Themes/ColorThemeContainer/ColorThemeContainer";
import css from './Input.module.scss';
import {IUseInputValue} from "../../../../hooks/useInputValue";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    active?: boolean,
    inputValue: IUseInputValue<string>
}

const Input: React.FC<IInput> = React.forwardRef<HTMLInputElement, IInput>((props, ref) => {
    const { active, inputValue, ...other } = props;

    return (
        <ColorThemeContainer themeStyles={css} className={css.container}>
            <input
                {...other}
                value={inputValue.current}
                onInput={({ target }) => inputValue.setCurrent((target as HTMLInputElement).value)}
                className={[css.input, active ? css.active : ''].join(' ')}
            />
        </ColorThemeContainer>
    );
});

export default React.memo(Input);