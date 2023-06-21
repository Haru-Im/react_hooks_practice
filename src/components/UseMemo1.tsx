export const UseMemo1 = () => {
  return <div>d</div>;
};

function Component() {
  const value = calculate();

  return <div>{value}</div>;
}

function calculate() {
  return 1;
}
