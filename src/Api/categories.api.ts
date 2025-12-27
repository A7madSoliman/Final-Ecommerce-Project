import axios from "axios";

export interface CategorySlider {
  _id: string;
  name: string;
  image: string;
}

export interface CategorySlidersResponse {
  data: CategorySlider[];
}

const getCategorieSlider = async (): Promise<CategorySlidersResponse> => {
  const { data } = await axios.get<CategorySlidersResponse>(
    "https://ecommerce.routemisr.com/api/v1/categories"
  );
  return data;
};

export default getCategorieSlider;
