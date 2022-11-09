import { useEffect } from 'react';

export const useResize = (callback) => {
    useEffect(() => {
        window.addEventListener('resize', callback);
        return () => window.addEventListener('resize', callback)
    }, [callback])
}

export const useScroll = (callback) => {
    useEffect(() => {
        window.addEventListener('scroll', callback);
        return () => window.addEventListener('scroll', callback)
    }, [callback])
}