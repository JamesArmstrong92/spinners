let items = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];

let output = 0;

for (let i = 0; i < items.length; i++) {


  let increment = 0;

  items.forEach((element) => {
    setTimeout(() => {
      process.stdout.write(element);

    }, increment += 100);
  });
}

setTimeout(() => {
  process.stdout.write('\n');
}, output);

