import { baseURL } from '@/store/store';
import { axiosInstance } from '@/utils/axios';
import { useQuery } from '@tanstack/react-query';

const getUserAddresses = async () => {
  const { data, status } = await axiosInstance.get(`${baseURL}/my-addresses/`);
  return status === 200 ? data : [];
};

const useUserAddress = () => {
  return useQuery({
    queryKey: ['userAddresses'],
    queryFn: () => getUserAddresses(),
  });
};

export { useUserAddress };
