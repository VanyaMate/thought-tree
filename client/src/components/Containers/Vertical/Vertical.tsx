import React from 'react';
import {IDefaultComponent} from "../../IDefaultComponent";
import styled from 'styled-components';

export interface IVertical extends IDefaultComponent {
    offset: number
}

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    & > * {
        margin-bottom: ${(props: { offset: number }) => `${props.offset}px` || '30px'};
    }
    
    &:last-child {
        margin-bottom: 0;
    }
`

const Vertical: React.FC<IVertical> = (props) => {
    return (
        <VerticalContainer {...props}/>
    );
};

export default Vertical;