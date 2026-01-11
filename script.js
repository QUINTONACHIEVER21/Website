function unlock() {
  const correctCode = "1205"; // CHANGE THIS
  const input = document.getElementById("codeInput").value;

  if (input === correctCode) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}