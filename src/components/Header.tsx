"use client";

import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0; // Remettre à zéro
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <header>
            <audio ref={audioRef} src="/sounds/Raja-Basketball.mp3" />
            <button onClick={toggleMusic}>
                <FontAwesomeIcon icon={isPlaying ? faVolumeMute : faVolumeUp} />
                {isPlaying ? ' Pause' : ' Lancer la musique'}
            </button>
            {/* Autres éléments du header */}
        </header>
    );
};

export default Header;