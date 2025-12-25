import axios from "axios";

export interface CategorySliders {
  _id: string;
  name: string;
  image: string;
}

interface CategorySlidersResponse {
  data: CategorySliders[];
}

const getCategorieSliders = async (): Promise<CategorySlidersResponse[]> => {
  const { data } = await axios.get<CategorySlidersResponse[]>(
    "https://ecommerce.routemisr.com/api/v1/categories"
  );
  return data;
};

export default getCategorieSliders;
