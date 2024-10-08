function sum() {
  let counter = 0;
  for (let i = 1; i < 5e9; i++) {
    counter = counter + i;
  }
  return counter;
}

export default sum;

process.on("message", ()=> {
  const counter = sum()
  console.log(process.pid);  
  process.send(counter)
})
