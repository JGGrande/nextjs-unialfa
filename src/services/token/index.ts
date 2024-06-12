import { jwtDecode } from "jwt-decode";

type UserPermissions = "admin" | "colaborador";

class TokenService  {
    private token: string;
    
    constructor(){
        this.isExpired = this.isExpired.bind(this);
        this.havePermission = this.havePermission.bind(this);
    }

    isExpired(token?: string) {
        if(token){
            const decoded = jwtDecode(token);

            if(!decoded) return true;
            
            if(!decoded.exp) return true;

            if(decoded.exp < Date.now() / 1000) return true;
          
            return false;  
        }
        return true;
    }

    havePermission(token: string, permissions: UserPermissions[]){
        const user = jwtDecode<{ permissoes: UserPermissions }>(token);

        if(user.permissoes){
            const haveSomePermission = permissions.includes(user.permissoes);

            return haveSomePermission;
        }

        return false;
    }
}

export default new TokenService();