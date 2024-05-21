import {
  LoginProps,
  logoutProps,
  UpdateUserProfileProps,
  UpdateUserPasswordProps,
  DeleteAccountProps,
  LoginSuccessResponse,
  logoutResponse,
  GetUserProfileResponse,
  DeleteAccountResponse,
} from "./index.type";

import { axiosClientAuth } from "@/app/https/index.Auth";

class Auth {
  request: typeof axiosClientAuth;

  constructor() {
    this.request = axiosClientAuth;
  }

  async login(sendData: LoginProps): Promise<LoginSuccessResponse> {
    const response = await this.request.post("/auth/signin", sendData);
    return response.data;
  }

  async logout(sendData: logoutProps): Promise<logoutResponse> {
    const response = await this.request.post("/auth/logout");
    return response.data;
  }

  async getProfile(): Promise<GetUserProfileResponse> {
    const response = await this.request.get("/auth/tokenVerification");
    return response.data;
  }

  async updatePassword(sendData: UpdateUserPasswordProps): Promise<void> {
    const response = await this.request.put(`auth/updatepassword`, sendData);
    return response.data;
  }

  async updateProfile(sendData: UpdateUserProfileProps): Promise<void> {
    const response = await this.request.put(`auth/updateprofile`, sendData);
    return response.data;
  }

  async deleteAccount(
    sendData: DeleteAccountProps
  ): Promise<DeleteAccountResponse> {
    const response = await this.request.post(`auth/delete`, sendData);
    return response.data;
  }
}

export default new Auth();
