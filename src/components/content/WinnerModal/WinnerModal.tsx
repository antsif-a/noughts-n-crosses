import React from 'react';
import PlayerType from '@/models/PlayerType';
import Modal from '@/components/ui/Modal';
import useModal from '@/hooks/useModal';

interface WinnerModalProps {
    winner: PlayerType;
    onClose: () => void;
}

export default function WinnerModal({ winner, onClose }: WinnerModalProps) {
    const { modalActive, setModalActive } = useModal(() => winner !== PlayerType.none, [winner]);

    const onModalClose = () => {
        setModalActive(false);
        onClose();
    };

    return (
        <Modal active={modalActive} onClose={onModalClose}>
            <p>Winner: {winner}</p>
        </Modal>
    );
}
