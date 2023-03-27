import React, {useContext} from 'react';
import Button, {IButton} from "../../UI/Buttons/Button/Button";
import ThemeContext, {ThemeType} from "../../Theme/ThemeContext";
import css from './TextButton.module.scss';

export interface ITextButton extends IButton {}

const TextButton: React.FC<ITextButton> = (props) => {
    const { type } = useContext(ThemeContext);
    const { className, ...other } = props;

    return (
        <Button {...other} className={[css.button, className, type === ThemeType.LIGHT ? css.light : css.dark].join(' ')}/>
    );
};

export default TextButton;