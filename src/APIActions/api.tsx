// api.ts  
import axios from 'axios';  
import { User } from '../types';  
  
class API {  
  static async fetchUsers(): Promise<User[]> {  
    try {  
      const response = await axios.get<User[]>('/users');  
      return response.data;  
    } catch (error) {  
      console.error('Error with fetching users:', error);  
      throw error;  
    }  
  }  
  
  static async searchUsers(name: string): Promise<User[]> {  
    try {  
      const response = await axios.post<User[]>('/users/search', { name });  
      return response.data;  
    } catch (error) {  
      console.error('Error searching users:', error);  
      throw error;  
    }  
  }  
  
  static async fetchUserById(id: number): Promise<User> {  
    try {  
      const response = await axios.get<User>(`/users/${id}`);  
      return response.data;  
    } catch (error) {  
      console.error('Error fetching user details:', error);  
      throw error;  
    }  
  }  
}  
  
export default API;  