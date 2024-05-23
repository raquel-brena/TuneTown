import Card from "./cards/Card";
import { MenuTop } from "./menuTop/MenuTop";

export const Container = ( ) => {

    return (
      <div
        className="h-full space-y-10 mx-2 md:mx-0 
        mt-12 w-full md:w-[60%] flex relative 
        justify-content items-center flex-col "
      >
        <MenuTop />
        <Card title="title" created_at="08 ago" content="aaaaa" />
        <Card title="title" created_at="08 ago" content="aaaaa" />
      </div>
    );
}