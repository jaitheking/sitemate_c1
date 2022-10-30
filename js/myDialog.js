var dg_obj;
//dialog setup
function setupDialog(obj) {
  dg_obj = obj;
}

//method to display dialog box and create UI
function showDialog() {
    var dialog_instance = document.createElement("div");
    dialog_instance.setAttribute("id", "dialog_instance");  
  var dialog_bg = document.createElement("div");
  dialog_bg.setAttribute("id", "dialog_bg");
  dialog_bg.classList.add("overlay");

  var dialog = document.createElement("div");
  dialog.setAttribute("id", "dialog_box");
  dialog.classList.add("dialog_box");

  var message = createMessageEl(dg_obj.message);

  var buttonConfirm = createButtonEl(dg_obj.buttonConfirm);
  var buttonCancel = createButtonEl(dg_obj.buttonCancel);

  dialog.appendChild(message);
  dialog.appendChild(buttonConfirm);
  dialog.appendChild(buttonCancel);
  dialog_instance.appendChild(dialog_bg);
  dialog_instance.appendChild(dialog);
  document.body.appendChild(dialog_instance);
}

// method to create message element
function createMessageEl(obj) {
  var message = document.createElement("p");
  message.setAttribute("id", "dialog_message");
  message.classList.add("dialog_msg");
  message.innerText = obj.text;
  return message;
}

//method to create button element
function createButtonEl(obj) {
  button = document.createElement("button");
  button.setAttribute("type", "button");
  button.classList.add("dialog_button");
  button.innerHTML = obj.text;
  button.addEventListener("click",function(){
    showMessage(obj.text);
    hideDialog();
  });
  return button;
}

// method to delete dialog elements
function hideDialog() {
  var dialog_instance = document.getElementById("dialog_instance");
  document.body.removeChild(dialog_instance);
}

// method when button clicked at dialog
function showMessage(text) {
    var clickedMessage = document.createElement("p");
    clickedMessage.setAttribute("id","result_message");
    clickedMessage.classList.add("dialog_result");
    clickedMessage.innerHTML = "You just clicked \""+ text+"\"";
    document.body.appendChild(clickedMessage);
}


