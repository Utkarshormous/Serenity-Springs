import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apicabins';
import toast from 'react-hot-toast';

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New Cabin SuccessFully Created');
      queryClient.invalidateQueries(['cabins']);
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createCabin };
}

export default useCreateCabin;
