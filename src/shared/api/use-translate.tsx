import { useMutation } from "@tanstack/react-query";
import { translateText } from "./translatedText";
import { useQueryStore } from "../store";

export const useTranslate = () => {
  const setPending = useQueryStore((state) => state.setPending);

  return useMutation({
    mutationFn: translateText,
    onMutate: () => {
      setPending(true);
    },
    onSuccess: () => {
      setPending(false);
    },
    onError: () => {
      setPending(false);
    },
  });
};
