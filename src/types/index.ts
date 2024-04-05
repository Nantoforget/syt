/**请求回来的data的数据类型*/
interface ResDataType<T> {
  code: number;
  data: T;
  messages: string;
  ok: boolean;
}

/*Home首页的数据类型*/
