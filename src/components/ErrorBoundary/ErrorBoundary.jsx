import { ErrorBoundary } from 'react-error-boundary';
import { PiSmileyMeltingFill } from "react-icons/pi";

const fallBack = (
    <main className="error-boundary">
        <div>
            <h1>
            <PiSmileyMeltingFill /> Opps, sorry! You have an error 
            </h1>
        </div>
    </main>
);

const FollowError = ({ children }) => (
    <ErrorBoundary fallback={fallBack}>
        {children}
    </ErrorBoundary>
);

export default FollowError;