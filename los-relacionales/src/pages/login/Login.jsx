import { useDispatch, useSelector } from "react-redux";
import { signUpWithGoogle } from "../../store";
import { Button, Image } from "react-bootstrap";
import { Navigate } from "react-router-dom";
// import btnGoogleSignIn from "/assets/logo.png";

export default function Login() {
    const user = useSelector((state) => state.auth.user);
    const isLoading = useSelector((state) => state.auth.isLoading);
    const dispatch = useDispatch();

    const handleSignUpWithGoogle = () => {
        dispatch(signUpWithGoogle());
    };

    return (
        <div className="Signin">
            {isLoading && <p>Loading...</p>}
            {user && <Navigate to="/" />}
            {!user && (
                <div>
                    <h2>Bienvenido</h2>
                    <Button
                        variant="light"
                        size="lg"
                        onClick={handleSignUpWithGoogle}>
                        <Image className="btnGoogleSignin" src='/assets/logo.png' alt="Sign in with Google" />
                    </Button>
                </div>
            )}
        </div>
    );
}
