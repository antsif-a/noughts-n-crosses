import React from 'react';
import PlayerType from '@/models/PlayerType';
import Modal from '@/components/ui/Modal';
import useModal from '@/hooks/useModal';
import WinnerModalStyles from './WinnerModal.module.scss';

interface WinnerModalProps {
    winner: PlayerType | null;
    onClose: () => void;
}

function renderWinner(winner: PlayerType) {
    return (
        <p>{winner === PlayerType.none ? 'Tie!' : `Winner: ${winner}`}</p>
    );
}

export default function WinnerModal({ winner, onClose }: WinnerModalProps) {
    const { modalActive, setModalActive } = useModal(
        () => winner !== null,
        [winner],
    );

    const onModalClose = () => {
        setModalActive(false);
        onClose();
    };

    return (
        <Modal active={modalActive} onClose={onModalClose}>
            <div className={WinnerModalStyles.container}>
                {renderWinner(winner!)}
            </div>
        </Modal>
    );
}
