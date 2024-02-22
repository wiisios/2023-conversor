export interface User {
    userId: number;
    userName: string;
    typeUser: string;
    exchangesLeft: number;
    roleid: number;
  }
  
  export interface UserForUpdate {
    userId: number;
    userName: string;
    typeUser: string;
    roleid: number;
  }
  
  export interface LoginData {
    UserName: string;
    Password: string;
  }
  
  export interface RegisterData {
    userName: string;
    password: string;
    typeUser: string;
  }
  
  export interface UserForCreate {
    userName: string;
    password: string;
    typeUser: string;
    roleid: number;
  }