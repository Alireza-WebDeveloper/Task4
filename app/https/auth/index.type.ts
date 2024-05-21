// Props
export interface LoginProps {
  email: string;
  password: string;
}
export interface logoutProps {}
export interface UpdateUserProfileProps {}
export interface DeleteAccountProps {}
export interface UpdateUserProfileProps {}
export interface UpdateUserPasswordProps {}

// Response
export interface LoginSuccessResponse {
  status: string;
  data: {
    user: GetUserProfileResponse;
  };
}

export interface logoutResponse {}
export interface GetUserProfileResponse {}
export interface DeleteAccountResponse {}
