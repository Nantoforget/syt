const countDown = ({ workDate, data }: { workDate: string; data: string }) => {
  console.log(workDate, data);
  // 创建目标时间对象
  let target_time = new Date(`${workDate} ${data}`);
  // 计算目标时间对象到当前时间的毫秒数
  let reduce_ms = target_time.getTime() - Date.now();
  // 返回需要的数据
  return {
    // day: parseInt(reduce_ms / 1000 / 3600 / 24),
    hour: parseInt((reduce_ms / 1000 / 3600) % 24),
    min: parseInt((reduce_ms / 1000 / 60) % 60),
    sec: Math.round((reduce_ms / 1000) % 60)
  };
};

export default countDown;
