import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from 'app/provider/StoreProvider/ui/StoreProvider';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import { App } from './app/App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <StoreProvider>
        <ErrorBoundary>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ErrorBoundary>
    </StoreProvider>,
);
