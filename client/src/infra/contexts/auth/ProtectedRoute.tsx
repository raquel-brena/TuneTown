import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./UseAuth";

type ProtectedComponentProps = PropsWithChildren & {
    isPrivate?: boolean;
}

export const ProtectedComponent = ({ children, isPrivate }: ProtectedComponentProps) => {
    const { loading, user } = useAuth();

    const navigate = useNavigate();

    if (loading) {
        return <p> Loading...</p>;
    }

    useEffect(() => {
        if (user == null || (isPrivate && !user)){
            navigate('/', {replace: true})
        } else {
            navigate(`/${user.username}`);
        }
    }, [navigate, user])

    return (
        <>{children}</>
    );
};
