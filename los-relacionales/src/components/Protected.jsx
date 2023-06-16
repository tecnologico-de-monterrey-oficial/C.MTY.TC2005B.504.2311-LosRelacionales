import { Navigate } from 'react-router-dom';

export default function Protected({ isLoggedIn, children }) {
    return isLoggedIn ? children : <Navigate to="/inicio" />;
}