import Auth from "@/app/https/auth/index";
import { useQuery } from "@tanstack/react-query";

const useGetUserProfile = () => {
  const { data, isLoading, isRefetching, refetch } = useQuery({
    queryKey: ["Fetch-UserProfile"],
    queryFn: () => {
      return Auth.getProfile();
    },
    refetchOnWindowFocus: false,
  });
  return { data, isLoading, refetch, isRefetching };
};

export { useGetUserProfile };
