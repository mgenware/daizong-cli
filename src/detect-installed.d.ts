declare module 'detect-installed' {
  export default function (name: string, opts: { local: boolean }): Promise<boolean>;
}
