import ClientHome from "@/components/ClientHome";
import { fetchAllBlockedUsers, fetchAllUsers } from "@/utils/api";

export default  async function Home() {

    const usersData = await fetchAllUsers();
    const blockedUsersData = await fetchAllBlockedUsers()

  
  return (
   <>
<ClientHome usersData={usersData} blockedUsersData={blockedUsersData}/>
   </>
  );
}


