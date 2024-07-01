// import { QueryClient, useMutation } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { createEditCabin } from "../../services/apicabins";

// function useEditCabin() {
//     const { mutate: editCabin, isLoading: isEditing } = useMutation({
//       //One Element could be only passed through this mutate function
//       mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
//       onSuccess: () => {
//         toast.success('Cabin SuccessFully edited');
//         QueryClient.invalidateQueries(['cabins']);

//       },
//       onError: (err) => toast.error(err.message),
//     });
//   return {editCabin,isEditing};
// }

// export default useEditCabin;

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from 'react-hot-toast';
import { createEditCabin } from '../../services/apicabins';

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully edited');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}
