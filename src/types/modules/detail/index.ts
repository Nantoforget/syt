/**科室数据类型 */
export interface DepartmentsType {
  depname: string;
  depcode: string;
  children: ChildrenType[];
}
interface ChildrenType {
  depname: string;
  depcode: string;
  children: null;
}
