import React, {useContext} from 'react';
import Button, {IButton} from "../../UI/Buttons/Button/Button";
import ThemeContext from "../../Theme/ThemeContext";
import css from './TextButton.module.scss';

export interface ITextButton extends IButton {}

const TextButton: React.FC<ITextButton> = (props) => {
    const { theme } = useContext(ThemeContext);
    const { style = {}, className, ...other } = props;

    style.background = theme!['--background-1'];
    style.color = theme!['--front-1'];

    return (
        <Button {...other} style={style} className={[css.button, className].join(' ')}/>
    );
};

export default TextButton;