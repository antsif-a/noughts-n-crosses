/// <reference types="react" />

declare module '*.svg' {
    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
        >;

    const src: string;
    export default src;
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
