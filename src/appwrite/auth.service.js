import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create({
        userId: ID.unique(),
        email: email,
        password: password,
        name: name,
      });
      if (userAccount) {
        return this.login({ email, password });
      } else {
        throw new Error("Account creation failed");
      }
    } catch (error) {
      console.error("Error creating account:", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const result = await this.account.createEmailPasswordSession({
        email: email,
        password: password,
      });
      if (result) {
        return result;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      if (user) {
        return user;
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Error fetching current user:", error);
      throw error;
    }
  }

  async logOut() {
    try {
      const result = await this.account.deleteSessions();
      if (result) {
        return result;
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  }
}

export default new AuthService();
