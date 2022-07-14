import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import PlayIcon from '@/components/icons/Play';
import './Home.module.scss';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <Button
                className="play-button"
                border={false}
                onClick={() => navigate('game')}
            >
                <PlayIcon width={240} />
            </Button>
        </div>
    );
}
