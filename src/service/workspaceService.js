import { auth } from "@/auth";



export default async function getAllWorkspace() {
    const session = await auth();
    console.log(`sesseion:  `,session.token);
    const res = await fetch(`http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,{
        method: "GET",
        headers: {
            "Authorization": `Bearer ${session?.token}`
        }
    });
    const data = await res.json();
    return data;

}
