declare const useThrottle: <T extends any[]>(callback: (...params: T) => void, timeout: number) => (...params: T) => void;
export default useThrottle;
