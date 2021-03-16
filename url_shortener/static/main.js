const copyText = () => {
    const text = document.getElementById("to-cp").innerText;
    // Creating an input field - this due to JS only being able to copy stuff from 'selected' elements,
    // the only elements where '.select()' can be called on are 'textarea' and 'input'
    const textArea = document.createElement("textarea");

    // Adding 'text' to it, adding it to the body and selecting it
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    // Hiding the textarea
    textArea.style.position = "absolute";
    textArea.style.right = "-9999";

    // Copying the text and removing the element
    document.execCommand("copy");
    document.body.removeChild(textArea);
};