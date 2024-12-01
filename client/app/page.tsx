export const dynamic = 'force-dynamic'
import ClientHome from "@/components/ClientHome";
import { fetchAllBlockedUsers, fetchAllUsers } from "@/utils/api";
import { UserResponse } from "@/utils/types";

export default  async function Home() {

    const usersData :UserResponse[] = await fetchAllUsers();
    const blockedUsersData: UserResponse[] = await fetchAllBlockedUsers()


  
  return (
   <>
<ClientHome usersData={usersData} blockedUsersData={blockedUsersData}/>
   </>
  );
}


