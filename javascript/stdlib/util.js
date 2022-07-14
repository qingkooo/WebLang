export function demo(...desc) {
  const t0 = performance.now();
  return (cb) => {
    if (typeof cb !== "function") return;
    for (let i = 0; i < desc.length; i++) {
      if (i === 0) {
        line(desc[i] || "Demo");
        continue;
      }
      log(`- ${desc[i] || ""}`);
    }
    cb();
    console.log(
      `\r\n%c# 运行时间 ${Number.prototype.toFixed.call(
        performance.now() - t0,
        3
      )}ms\r\n`,
      "background-color:#D1F2EB;color:black;"
    );
  };
}
export function log(...message) {
  print("log", message);
}
export function warn(...message) {
  print("warn", message);
}
export function dir(...message) {
  print("dir", message);
}
export function err(...message) {
  print("error", message);
}
function print(method, message) {
  if (!method in console) return;
  if (typeis(message) != "array") message = [message];
  if (message.length === 0) return;
  message.forEach((item) => {
    console[method](item);
  });
}

export function line(
  message = "Dividing line",
  delimiter = ["-", "-"],
  style = "font-size:14px"
) {
  const arr = [];
  arr.push(delimiter[0].repeat(3));
  arr.push(message);
  arr.push(delimiter[1].repeat(3));
  console.log("%c" + arr.join(""), style);
}

export function typeis(v) {
  let type = Object.prototype.toString.call(v);
  return type
    .substring(1, type.length - 1)
    .split(" ")[1]
    .toLowerCase();
}
