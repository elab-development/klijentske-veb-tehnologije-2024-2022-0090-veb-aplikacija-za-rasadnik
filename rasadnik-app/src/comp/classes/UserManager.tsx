export class User {
    id: number;
    username: string;
    email: string;
  
    constructor(id: number, username: string, email: string) {
      this.id = id;
      this.username = username;
      this.email = email;
    }
  }
  
  export class UserManager {
    private users: User[];
  
    constructor(users: User[] = []) {
      this.users = users;
    }
  
    addUser(user: User): void {
      this.users.push(user);
    }
  
    removeUserById(id: number): void {
      this.users = this.users.filter(user => user.id !== id);
    }
  
    getUserById(id: number): User | undefined {
      return this.users.find(user => user.id === id);
    }
  
    getAllUsers(): User[] {
      return this.users;
    }
  }