const change = document.body;

function handleClick() {
  return alert("The button has been clicked");
}

const handleFocus = () => {
  return (change.style.backgroundColor = "red");
};

change.addEventListener("click", handleFocus);
