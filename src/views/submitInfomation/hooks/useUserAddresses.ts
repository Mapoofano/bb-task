import { baseURL } from '@/store/store';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getUserAddresses = async () => {
  const { data, status } = await axios.get(`${baseURL}/my-addresses/`);
  return status === 200 ? data : [];
};

const useUserAddress = () => {
  return useQuery({
    queryKey: ['userAddresses'],
    queryFn: () => getUserAddresses(),
  });
};

export { useUserAddress };
