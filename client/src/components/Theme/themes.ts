export interface ITheme {
    '--background-5': string,
    '--background-4': string,
    '--background-3': string,
    '--background-2': string,
    '--background-1': string,
    '--mark-red': string,
    '--mark-blue': string,
    '--mark-green': string,
    '--mark-orange': string,
    '--mark-purple': string,
    '--front-5': string,
    '--front-4': string,
    '--front-3': string,
    '--front-2': string,
    '--front-1': string,
}

export const lightTheme: ITheme = {
    "--background-1": "#fff",
    "--background-2": "#eee",
    "--background-3": "#ddd",
    "--background-4": "#ccc",
    "--background-5": "#bbb",
    "--front-1": "#000",
    "--front-2": "#222",
    "--front-3": "#444",
    "--front-4": "#666",
    "--front-5": "#888",
    "--mark-blue": "#53f",
    "--mark-green": "#4f5",
    "--mark-orange": "#f91",
    "--mark-purple": "#83f",
    "--mark-red": "#f45"
};

export const darkTheme: ITheme = {
    "--background-1": "#000",
    "--background-2": "#222",
    "--background-3": "#444",
    "--background-4": "#666",
    "--background-5": "#888",
    "--front-1": "#fff",
    "--front-2": "#eee",
    "--front-3": "#ddd",
    "--front-4": "#ccc",
    "--front-5": "#bbb",
    "--mark-blue": "#53f",
    "--mark-green": "#4f5",
    "--mark-orange": "#f91",
    "--mark-purple": "#83f",
    "--mark-red": "#f45"
};
