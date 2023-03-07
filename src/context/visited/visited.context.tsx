import { getCookie, setCookie } from 'cookies-next';
import { ReactElement, createContext, useEffect, useState } from 'react';
import { VISITED_INITIAL_STATE } from './default_state';

const COOKIE_VISITED = "visited";

export const VisitedContext = createContext(VISITED_INITIAL_STATE);

export const VisitedProvider = ({ children }: { children: ReactElement }) => {
    const [visited, setVisited] = useState<boolean>(false);
    const cookie = getCookie(COOKIE_VISITED);

    useEffect(() => {
        if (!cookie || cookie == "false") {
            setVisited(false);
            setCookie(COOKIE_VISITED, true);
        } else {
            setVisited(true);
        }
    }, [cookie])

    const value = {
        visited
    };

    return <VisitedContext.Provider value={value}>
        {children}
    </VisitedContext.Provider>
}