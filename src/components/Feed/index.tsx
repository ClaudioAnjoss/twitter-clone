import React from 'react';

import { Container, ProfilePicture, FeedData } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
        <ProfilePicture>
            <img src="./logo192.png" alt="Foto do perfil" />
        </ProfilePicture>
        <FeedData>
            <div className="feed-info">
                <span className="title">Claudio Anjos</span>
                <span className="twitter">@ClaudioAnjoss</span>
                <span className='ball' />
                <span className='date'>27 de jun</span>
            </div>
            <div className="publication">
                <p>Foguete não tem ré  🚀</p>
                <img src="#" alt="Foto da publicacao" />
            </div>
            <div className="feed-icons">
                <span>icon</span>
                <span>icon</span>
                <span>icon</span>
            </div>
        </FeedData>
    </Container>
    );
}

export default Feed;