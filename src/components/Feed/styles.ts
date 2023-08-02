import styled from "styled-components";
import { Style } from "styled-icons/material-outlined";

export const Container = styled.div`
    max-width: 599px;
    max-height: 396px;
    width: 100%;
    
    display: flex;

    border-top: 1px solid var(--gray);
`;

export const ProfilePicture = styled.div`
    display: flex;
    justify-content: center;

    max-width: 60px;
    padding: 5px;

    > img {
        width: 50px;
        height: 50px;
    }
`;

export const FeedData = styled.div``;
