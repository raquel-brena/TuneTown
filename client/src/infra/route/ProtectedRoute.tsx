import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./UseAuth";

type ProtectedComponentProps = PropsWithChildren;

export const ProtectedComponent = ({ children }: ProtectedComponentProps) => {
    const user = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (user == null){
            navigate('/', {replace: true})
        } else {
            navigate(`/${user.id}`);
        }
    }, [navigate, user])
    return (
        <>{children}</>
    );
};
