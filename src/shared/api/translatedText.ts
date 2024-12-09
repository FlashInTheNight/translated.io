import axios from "axios";
import { toast } from "react-toastify";

interface Props {
  text: string;
  sourceLang: string;
  targetLang: string;
}

export const translateText = async ({
  text,
  sourceLang,
  targetLang,
}: Props) => {
  try {
    if (!text || !sourceLang || !targetLang) {
      toast.error(
        "Please insert the text for translation. Also make sure that you have selected the language of the text and the language of the desired translation"
      );
      return;
    }

    const response = await axios.get(
      "https://api.mymemory.translated.net/get",
      {
        params: {
          q: text,
          langpair: `${sourceLang}|${targetLang}`,
        },
      }
    );

    const translatedText = response.data?.responseData?.translatedText;

    return translatedText;
  } catch (error) {
    toast.error("Translation failed. Please check your internet connection.");
    throw error;
  }
};
