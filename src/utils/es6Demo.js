// ES6+ demo tổng hợp
export const sumRest = (...nums) => nums.reduce((a, b) => a + b, 0);

export const destructuringDemo = () => {
  const arr = [10, 20, 30, 40];
  const [first, second, ...others] = arr;

  const user = { id: 1, name: "Si", role: "FE" };
  const { name, role, ...rest } = user;

  const summary = `User ${name} (${role}) | rest keys: ${Object.keys(rest).join(",")}`;
  console.log(summary);

  return { first, second, others };
};

const fakeApi = (n = 2) =>
  new Promise((resolve) => setTimeout(() => resolve(n * 3), 400));

export async function asyncDemo() {
  try {
    const res = await fakeApi(5);
    return `Async OK: ${res}`;
  } catch (e) {
    return `Async Error: ${e?.message || e}`;
  } finally {
    console.log("asyncDemo finished");
  }
}
