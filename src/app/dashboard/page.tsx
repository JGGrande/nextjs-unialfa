import { LayoutDashboard } from "@/components/layoutDashboard";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import TokenService from "../../services/token/index";

export default function Dashboard(){
    const cookie = cookies();

    const token = cookie.get("@painel-1pitchau-token");

    if(!token?.value || TokenService.isExpired(token.value)){
        return redirect('/login');
    }

    return(
        <>
           <LayoutDashboard token={token.value} >
           </LayoutDashboard>
        </>
    );
}