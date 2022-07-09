export default function useStyles(...classNames: Array<string | boolean | undefined>) {
    classNames.filter((c) => !!c);
    return classNames.join(' ');
}
