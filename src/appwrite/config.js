import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  Databases;
  bucketStorage;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.Databases = new Databases(this.client);
    this.bucketStorage = new Storage(this.client);
  }

  // 1. Post Management Functionality

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.Databases.createDocument(
        conf.databaseId,
        conf.collectionId,
        slug, // slug ke  Document ID hisebe use kora hocche
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log(`Error creating post:`, error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.Databases.updateDocument(
        conf.databaseId,
        conf.collectionId,
        slug, // slug ke  Document ID hisebe use kora hocche
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log(`Error updating post:`, error);
    }
  }

  async deletePost(slug) {
    try {
      await this.Databases.deleteDocument(
        conf.databaseId,
        conf.collectionId,
        slug // slug ke  Document ID hisebe use kora hocche
      );
      return true;
    } catch (error) {
      console.log(`Error deleting post:`, error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.Databases.getDocument(
        conf.databaseId,
        conf.collectionId,
        slug // slug ke  Document ID hisebe use kora hocche
      );
    } catch (error) {
      console.log(`get post err ${error}`);
    }
  }

  // with Querys
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      const posts = await this.Databases.listDocuments(
        conf.databaseId,
        conf.collectionId,
        queries
      );
      return posts;
    } catch (error) {
      console.log(`list posts err ${error}`);
      return false;
    }
  }

  // 2. File Upload Functionality

  async uploadFile(file) {
    try {
      const result = await this.bucketStorage.createFile({
        bucketId: conf.bucketId,
        fileId: ID.unique(),
        file,
      });
      return result;
    } catch (error) {
      console.log(`File upload error:`, error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucketStorage.deleteFile({
        bucketId: conf.bucketId,
        fileId,
      });
    } catch (error) {
      console.log(`File delete error:`, error);
      return false;
    }
  }

  getFilePreviewURL(fileId) {
    return this.bucketStorage.getFilePreview({
      bucketId: conf.bucketId,
      fileId,
    });
  }
}

const service = new Service();
export default service;
