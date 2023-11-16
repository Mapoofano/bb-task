import { baseURL } from '@/store/store';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface SaveOrderRequest {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

const submitInformation = (data: SaveOrderRequest) => {
  console.log(data);
  return axios.post(`${baseURL}/order/completion/`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const useSubmitInformation = () => {
  return useMutation({
    mutationFn: (data: SaveOrderRequest) => submitInformation(data),
    retry: 5,
    onSuccess: () => {
      //   queryClient.invalidateQueries({ queryKey: ['balances'] });
    },
  });
};

export { useSubmitInformation };
