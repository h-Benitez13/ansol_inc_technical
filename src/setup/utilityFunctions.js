export function showDescription() {
  document.getElementById("desc").removeAttribute("hidden");
  let p1 = document.getElementById("prompt1");
  let p2 = document.getElementById("prompt2");
  let p3 = document.getElementById("prompt3");
  p1.setAttribute("hidden", false);
  p2.setAttribute("hidden", false);
  p3.setAttribute("hidden", false);
}

export function show1() {
  document.getElementById("prompt1").removeAttribute("hidden");
  let p2 = document.getElementById("prompt2");
  let p3 = document.getElementById("prompt3");
  let desc = document.getElementById("desc");
  p2.setAttribute("hidden", false);
  p3.setAttribute("hidden", false);
  desc.setAttribute("hidden", false);
}

export function show2() {
  document.getElementById("prompt2").removeAttribute("hidden");
  let p1 = document.getElementById("prompt1");
  let p3 = document.getElementById("prompt3");
  let desc = document.getElementById("desc");
  p1.setAttribute("hidden", false);
  p3.setAttribute("hidden", false);
  desc.setAttribute("hidden", false);
}

export function show3() {
  document.getElementById("prompt3").removeAttribute("hidden");
  let p1 = document.getElementById("prompt1");
  let p2 = document.getElementById("prompt2");
  let desc = document.getElementById("desc");
  p1.setAttribute("hidden", false);
  p2.setAttribute("hidden", false);
  desc.setAttribute("hidden", false);
}
