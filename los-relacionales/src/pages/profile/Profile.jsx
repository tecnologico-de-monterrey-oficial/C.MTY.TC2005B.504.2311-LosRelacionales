import { useSelector } from "react-redux";

export default function Profile() {
    const user = useSelector((state) => state.auth.user);

    return (
        <div>
            <h1>Profile</h1>
            <div>
                {user &&
                    <div>
                        <p>Username: {user.displayName}</p>
                        <p>Email: {user.email}</p>
                    </div>
                }
            </div>
        </div>
    );
}