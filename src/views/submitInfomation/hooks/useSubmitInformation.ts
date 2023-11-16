import { baseURL } from '@/store/store';
import { axiosInstance } from '@/utils/axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface SaveOrderRequest {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

const submitInformation = (data: SaveOrderRequest) => {
  return axiosInstance.post(`${baseURL}/order/completion/`, data);
};

const useSubmitInformation = () => {
  const { push } = useRouter();

  return useMutation({
    mutationFn: (data: SaveOrderRequest) => submitInformation(data),
    retry: 5,
    onSuccess: () => {
      //   queryClient.invalidateQueries({ queryKey: ['balances'] });
      push('/confirmation/success');
    },
  });
};

export { useSubmitInformation };
