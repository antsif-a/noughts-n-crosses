import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { PlayIcon } from '../../icons';
import './Home.scss';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <Button
              className="play-button"
              border={false}
              onClick={() => navigate('play')}
            >
                <PlayIcon width={240} />
            </Button>
        </div>
    );
}
