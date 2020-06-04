let count = 0;

while (count < 100) {
  ++count;
  if (count % 5 == 0) continue;
  console.log(count);
}