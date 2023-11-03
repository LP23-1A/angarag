function print(name) {
  console.log("hello" + name + ":)");
}
print("bat");

function print(name) {
  return "hello" + name;
}
console.log(print("bold"));
