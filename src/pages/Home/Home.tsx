import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { PlayIcon } from '@/components/icons';
import HomeStyles from './Home.module.scss';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className={HomeStyles.Home}>
            <Button
                border={false}
                onClick={() => navigate('game')}
            >
                <PlayIcon width={240} />
            </Button>
        </div>
    );
}
