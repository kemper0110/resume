import {renderToString} from 'react-dom/server';
import App from './App';

export function SSRRender() {
    return renderToString(<App/>);
}