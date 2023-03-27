import React, {useContext} from 'react';
import Button from "../../components/UI/Buttons/Button/Button";
import ThemeContext from "../../components/Theme/ThemeContext";
import TextButton from "../../components/styledComponents/TextButton/TextButton";

const Playground = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            Playground
            <TextButton label={'Изменить тему'} onClick={toggleTheme} active={true}/>
        </div>
    );
};

export default Playground;