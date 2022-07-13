import { DependencyList, useEffect, useState } from 'react';

export default function useModal(active: () => boolean, deps: DependencyList) {
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        setModalActive(active());
    }, [...deps]);

    return {
        modalActive,
        setModalActive,
    };
}
