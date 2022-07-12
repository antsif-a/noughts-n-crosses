import {
    Dispatch,
    DispatchWithoutAction,
    SetStateAction,
    useState,
} from 'react';

export default function useReusableState<S>(
    initialValue: S,
): [S, Dispatch<SetStateAction<S>>, DispatchWithoutAction] {
    const [state, setState] = useState(initialValue);

    return [
        state,
        setState,
        () => setState(initialValue),
    ];
}
