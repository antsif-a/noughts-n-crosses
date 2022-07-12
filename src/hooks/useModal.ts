import { DependencyList, useEffect, useState } from 'react';

export default function useModal(reducer: () => boolean, deps: DependencyList) {
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        setModalActive(reducer());
    }, [...deps]);

    return {
        modalActive,
        setModalActive,
    };
}
