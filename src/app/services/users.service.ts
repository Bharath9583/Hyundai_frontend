import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserData } from "src/components/users/users.component";

@Injectable({
    providedIn: "root"
})

export class UsersService {
    constructor(private http: HttpClient) {

    }

    login(data: any) {
        return this.http.post<{token: string}>("https://hyundai-backend-xsoh.onrender.com/login",data)
    }

    getUsers() {
        return this.http.get<UserData[]>("https://hyundai-backend-xsoh.onrender.com/users")
    }

    addUser(user: UserData) {
        return this.http.post<UserData[]>("https://hyundai-backend-xsoh.onrender.com/users/add",user)
    }

    updateUser(user: UserData) {
        return this.http.put<UserData[]>("https://hyundai-backend-xsoh.onrender.com/users/update",user)
    }

    deleteUser(id: number) {
        return this.http.delete<UserData[]>(`https://hyundai-backend-xsoh.onrender.com/users/${id}`)
    }
}