export default function mergeStyles(...classNames: Array<string | boolean | undefined>) {
    return classNames.filter((c) => !!c).join(' ');
}
