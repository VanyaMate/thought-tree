import React, {useState} from 'react';
import Button, {IButton} from "../Button/Button";
import css from './SmallIconButton.module.scss';
import SmallInfoPopup from "../../Popups/SmallInfoPopup/SmallInfoPopup";
import ColorThemeContainer from "../../../Themes/ColorThemeContainer/ColorThemeContainer";

export interface ISmallIconButton extends IButton {
    icon: string,
    info?: string,
}

const SmallIconButton: React.FC<ISmallIconButton> = (props) => {
    const [showInfo, setShowInfo] = useState<boolean>(false);

    return (
        <ColorThemeContainer themeStyles={css} className={css.container}>
            <Button
                {...props}
                className={css.button}
                activeStyle={css.onActive}
                alwaysStyle={css.onAlways}
                onMouseOver={() => setShowInfo(true)}
                onMouseOut={() => setShowInfo(false)}
            >
                <img src={props.icon} className={css.icon}/>
            </Button>
            { props.info ? <SmallInfoPopup info={props.info} hidden={!showInfo}/> : '' }
        </ColorThemeContainer>
    );
};

export default React.memo(SmallIconButton);