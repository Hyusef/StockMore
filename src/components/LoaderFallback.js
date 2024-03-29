import { Suspense } from 'react';

// project imports
import Loader from './Loader';
// ==============================|| LOADABLE - LAZY LOADING ||============================== //
const LoaderFallback = (Component) => (props) =>
    (   <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    );

export default LoaderFallback;
