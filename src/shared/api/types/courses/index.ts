interface Category {
  id: string;
  name: string;
}

interface CategoryLink {
  category: Category;
}

export interface Course {
  id: string;
  name: string;
  shortDescription: string | null;
  categoriesLinksCount: number;
  categoriesLinks: CategoryLink[];
  studentCoursesCount: number;
  updatedDate: string | null;
  softDeleted: boolean;
}

interface Filter {
  id: string | null;
  showSite: boolean | null;
  showSchool: boolean | null;
  isPublish: boolean | null;
  isFree: boolean | null;
  hasPlans: boolean | null;
  hasCert: boolean | null;
  gamificationEnabled: boolean | null;
  excludeCoursesIds: string[] | null;
  createdDateMoreThan: string | null;
  createdDateLessThan: string | null;
  itemsTotal: number;
  take: number;
  skip: number;
  search: string | null;
  sortName: string;
  sortType: string;
  useSort: boolean;
  useBaseFilter: boolean;
  useItemsTotal: boolean;
  softDeleted: boolean;
  ids: string[] | null;
}

export interface CoursesResponseBody {
  items: Course[];
  filter: Filter;
}

export interface ApiResponseBody {
  success: boolean;
  errors: string[];
  body: CoursesResponseBody;
  resetToken: boolean;
}

export interface ApiResponse {
  success: boolean;
  errors: string[];
  body: ApiResponseBody;
  resetToken: boolean;
}