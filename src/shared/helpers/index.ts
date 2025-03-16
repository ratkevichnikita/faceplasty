import {BESTSELLER_COURSE_ID, CategoryName, Product} from "@/shared/api/types/courses";

export function nanosecondsToTime(nanoseconds: number) {
  const totalSeconds = Math.floor(nanoseconds / 1000000000);
  const hours = Math.floor(totalSeconds / 3600);
  return hours;
}

const getRandomRating = () => +(Math.random() * (4.9 - 4.6) + 4.6).toFixed(1);

const getRandomStudents = () => Math.floor(Math.random() * (700 - 95 + 1)) + 95;

export const enhanceProductsWithData = (products: Product[] | null): Product[] => {
  if (!products) return [];

  if (typeof window === "undefined") {
    return products;
  }

  const storedData = JSON.parse(localStorage.getItem("courseData") || "[]");

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
        isPremium,
      };
    });
};

export function extractWidgetId(inputString: string) {
  const match = inputString.match(/widgetId:([\w-]+)/i);
  if (match) {
    return match[1];
  }
  return null;
}

export function extractLinkId(inputString: string) {
  const match = inputString.match(/link:([\w-]+)/i);
  if (match) {
    return match[1];
  }
  return null;
}