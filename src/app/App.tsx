import { useEffect } from 'react';
import AppRouter from './router/ui/AppRouter';
import './styles/index.scss';

export function App() {
    useEffect(() => {
        if (window.location.pathname !== '/') {
            window.location.replace('/');
        }
    }, []);

    return (
        <div className="container">
            <AppRouter />
        </div>
    );
}
