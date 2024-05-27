import { useParams } from "react-router-dom";
import { ContainerCentral } from "./ContainerCentral";

export const Profile = () => {
    const { profileId } = useParams<{profileId: string}>();

    return (
      <div
        className="h-full md:w-8/12 w-full rounded-lg border-box relative bg-fume 
      border border-stroke overflow-hidden"
      >
        <>
          <h1>Profile</h1>
          <p>{profileId}</p>
        </>
      </div>
    );
    
};
