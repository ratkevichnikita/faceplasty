import {CategoryName, Product} from "@/shared/api/types/courses";

export function getRandomInt(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

const getRandomRating = () => +(Math.random() * (4.9 - 4.6) + 4.6).toFixed(1);
const getRandomStudents = () => Math.floor(Math.random() * (700 - 95 + 1)) + 95;

export const enhanceProductsWithData = (products: Product[] | null): Product[] => {
  if (!products) return [];

  if (typeof window === "undefined") {
    return products;
  }

  const storedData = JSON.parse(localStorage.getItem("courseData") || "[]");
  const BESTSELLER_COURSE_ID = "YlOCqtnHD0iy47m1i-N-4w"; // Айди бестселлера

  return products
    ?.filter(
      (product) =>
        product.category &&
        product.category.name &&
        Object.values(CategoryName).includes(product.category.name as CategoryName)
    )
    .map((course) => {
      let existingData = storedData.find((item: { id: string }) => item.id === course.id);

      if (!existingData) {
        existingData = {
          id: course.id,
          rating: getRandomRating(),
          students: getRandomStudents(),
        };
        storedData.push(existingData);
      }

      // Проверяем, есть ли в product.contents нужный courseId
      const isPremium = course.contents?.some(content => content.courseId === BESTSELLER_COURSE_ID) || false;

      return {
        ...course,
        rating: existingData.rating,
        students: existingData.students,
        isPremium, // Добавляем флаг isPremium
      };
    });
};


export function getHref(value: string): string | null {
  const match = value.match(/https?:\/\/[^\s]+/);
  return match ? match[0] : null;
}