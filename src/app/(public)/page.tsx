import Homepage from "@/flat-pages/Homepage";
import {getCoursesList, getWebinars} from "@/shared/api";

const Page = async () => {
  const products = await getCoursesList("150");
  const events = await getWebinars()

  return (
    <Homepage products={products} events={events} />
  );
}

export default Page;