import Homepage from "@/flat-pages/Homepage";
import {getCoursesList} from "@/shared/api";

const Page = async () => {
  const products = await getCoursesList();

  return (
    <Homepage products={products} />
  );
}

export default Page;