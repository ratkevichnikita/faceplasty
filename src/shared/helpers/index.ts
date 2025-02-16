import {Product} from "@/shared/api/types/courses";

export function getRandomInt(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

const getRandomRating = () => +(Math.random() * (4.9 - 4.6) + 4.6).toFixed(1);
const getRandomStudents = () => Math.floor(Math.random() * (700 - 95 + 1)) + 95;

export const enhanceProductsWithData = (products: Product[] | null) => {
  const storedData = JSON.parse(localStorage.getItem("courseData") || "[]");

  const updatedCourses = products && products?.filter(p => p.category && !p.category.name.includes("ТЕСТ продукты")).map((course) => {
    let existingData = storedData.find((item: { id: string }) => item.id === course.id);

    if (!existingData) {
      existingData = {
        id: course.id,
        rating: getRandomRating(),
        students: getRandomStudents(),
      };
      storedData.push(existingData);
    }

    return {
      ...course,
      rating: existingData.rating,
      students: existingData.students,
    };
  });

  localStorage.setItem("courseData", JSON.stringify(storedData));

  return updatedCourses;
};