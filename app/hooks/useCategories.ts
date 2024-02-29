
const categoriesValue = [
{value: "Hair Styling"},
{value: "Soap Making"},
{value: "Babysitting"},
{value: "Cleaning Services"},
]
 

const useCategories = () => {
    const getAllCategories = () => categoriesValue;

    const getByCategoriesValue = (value: string) => {
        return categoriesValue.find((item) => item.value == value );
    }
    return {
        getAllCategories,
        getByCategoriesValue
    }
};
export default useCategories;