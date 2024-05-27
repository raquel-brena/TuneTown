import { useParams } from "react-router-dom";
import { Photo } from "../components/Photo";

export const Profile = () => {
    const { profileId } = useParams<{profileId: string}>();

    return (
      <div
        className="h-full md:w-11/12 w-full rounded-lg border-box relative border-r-1 
      border border-stroke overflow-hidden "
      >
        <>
          {/* PROFILE HEADER */}
          <div className="h-[30%] border-b-1 border-stroke border">
            {/* BACK */}
            <div className="h-1/6 border-b-1 border-stroke border">
              @Beltrano
            </div>
            {/* HEADER */}
            <div className="flex flex-col relative h-[84%] justify-between">
              {/* PROFILE INFO */}
              <div className="flex justify-between px-4  pt-4 ">
                <div className="flex flex-row items-center gap-2">
                  <Photo bg="d9d9d9" size="4" />
                  <div className="flex flex-col">
                    <span>
                      listen now <b> beautiful thins - benson boone</b>
                    </span>
                    <span>251 tuners shared</span>
                  </div>
                </div>
                <div>music</div>
              </div>
              {/* MENU */}
              <div className="flex h-1/6 w-full ">
                <div className="flex flex-row gap-9">
                  <button>posts</button>
                  <button>foruns</button>
                  <button>curtidas</button>
                </div>
              </div>
            </div>
          </div>
          {/* PROFILE POSTS */}
          <h1>Profile</h1>
          <p>{profileId}</p>
        </>
      </div>
    );
    
};
