import { useParams } from "react-router-dom";

export const Profile = () => {
    const { profileId } = useParams<{profileId: string}>();

    return (
        <div>
            <h1>Profile</h1>
            <p>{profileId}</p>
        </div>
    );
    
};
