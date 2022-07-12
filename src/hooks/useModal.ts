import { DependencyList, useEffect, useState } from 'react';

export default function useModal(deps: DependencyList, reducer: () => boolean) {
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        setModalActive(reducer());
    }, [...deps]);

    return {
        modalActive,
        setModalActive,
    };
}
