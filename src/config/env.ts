declare global {
    interface Window {
        ENV: {
            REACT_APP_API_URL: string;
            REACT_APP_API_KEY: string;
        };
    }
}

export const REACT_APP_API_URL = window.ENV.REACT_APP_API_URL ||  process.env.REACT_APP_API_URL;
export const REACT_APP_API_KEY =  window.ENV.REACT_APP_API_KEY || process.env.REACT_APP_API_KEY;

