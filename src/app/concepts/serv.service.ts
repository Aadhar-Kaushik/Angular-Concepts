import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
  }
  fetchUsersObs() {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
      .pipe(tap(e => console.log("fetchUsersObs:::::", e)))
  }
  fetchUsersPro() {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
      .toPromise()
      .then(res => console.log("fetchUsersPro", res))
  }

  insertUsers(obj) {
    const headers = {
      "language": "en",
      "nation": "India"
    }
    return this.http.post<any[]>("https://jsonplaceholder.typicode.com/users", obj, { headers: headers })
  }
  insertUsersToCloud(obj) {
    const headers = {
      "language": "en",
      "nation": "India"
    }
    return this.http.post<any[]>("https://angular-services-f3b20-default-rtdb.firebaseio.com/users.json", obj, { headers: headers })
  }

  getUsersFromCloud() {
    return this.http.get<any[]>("https://angular-services-f3b20-default-rtdb.firebaseio.com/users.json")
  }
  editPutUsersFromCloud(id, req) {
    return this.http.put<any[]>("https://angular-services-f3b20-default-rtdb.firebaseio.com/users/" + id + ".json", req)
  }
  editPatchUsersFromCloud(id, req) {
    return this.http.patch<any[]>("https://angular-services-f3b20-default-rtdb.firebaseio.com/users/" + id + ".json", req)
  }
  deleteUsersFromCloud(id) {
    return this.http.delete<any[]>("https://angular-services-f3b20-default-rtdb.firebaseio.com/users/" + id + ".json")
  }

}
