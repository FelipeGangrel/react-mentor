export default function Home() {
  const min = 2;
  const max = 3;
  const randomNumber = Math.random();
  const number = Math.floor(randomNumber * (max - min + 1) + min);

  return (
    <main>
      <h1>Hello</h1>
      {number}
    </main>
  );
}
