interface School {
  id:  string | null,
  name:  string | null
}

interface Image {
  id: string,
  cloudKey: string,
  extension: string
}

export interface Product {
  id: string | null,
  name: string | null,
  description:  string | null,
  isSubscription: boolean,
  internalName:  string | null,
  orderCount: number,
  school: School | null,
  imageLinks: [],
  course: null,
  isPublished: true,
  imageId: string | null,
  price: number | null,
  currency: string | null,
  primaryImage: object | null,
  category: null,
  image: Image
  rating?: number
  students?: number
}

interface Filter {
  canUseAsDonation: null;
  categoryId: null;
  categoryIds: null;
  courseId: null;
  excludeId: null;
  flowDateId: null;
  hasFlowDateId: null;
  hasImageId: null;
  hasPrimaryImage: null;
  id: null;
  ids: null;
  isPublished: null;
  itemsTotal: number;
  libraryId: null;
  limitOrderLifetime: null;
  packageIds: null;
  preventSystemEmail: null;
  search: null;
  skip: number;
  softDeleted: boolean;
  sortName: "CreatedDate";
  sortType: "Desc";
  take: number;
  type: null;
  types: null;
  useBaseFilter: boolean;
  useItemsTotal: boolean;
  useSort: boolean;
}

export interface CoursesResponseBody {
  items: Product[];
  filter: Filter;
}

export interface ApiResponse {
  success: boolean;
  errors: string[];
  body: CoursesResponseBody;
  resetToken: boolean;
}