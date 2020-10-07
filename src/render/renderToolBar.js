const buildToolBar = () => {
  // Build toolbar structure
  const toolbarDiv = document.createElement('div');
  toolbarDiv.setAttribute('class', 'toolbar-div');

  // Build toolbar elements
  const addButton = document.createElement('div');
  addButton.setAttribute('class', 'toolbar-button');
  addButton.innerHTML = '+';
  const orderDiv = document.createElement('div');
  orderDiv.setAttribute('class', 'order-div');

  // Dropdown holder
  const dropdown = document.createElement('div');
  dropdown.setAttribute('class', 'select');

  // Select menu
  const select = document.createElement('select');
  select.setAttribute('name', 'slct');
  select.setAttribute('id', 'slct');
  // Options
  const chooseOpt = document.createElement('option');
  chooseOpt.setAttribute('selected', '');
  chooseOpt.setAttribute('disabled', '');
  chooseOpt.innerHTML = 'Sort';
  const highPriorityOpt = document.createElement('option');
  highPriorityOpt.setAttribute('value', '1');
  highPriorityOpt.innerHTML = 'Priority (high -> low)';
  const lowPriorityOpt = document.createElement('option');
  lowPriorityOpt.setAttribute('value', '2');
  lowPriorityOpt.innerHTML = 'Priority (low -> high)';
  const earlyDueDateOpt = document.createElement('option');
  earlyDueDateOpt.setAttribute('value', '3');
  earlyDueDateOpt.innerHTML = 'Due (earlier -> later)';
  const lateDueDateOpt = document.createElement('option');
  lateDueDateOpt.setAttribute('value', '4');
  lateDueDateOpt.innerHTML = 'Due (later -> earlier)';
  const newCreatedOpt = document.createElement('option');
  newCreatedOpt.setAttribute('value', '4');
  newCreatedOpt.innerHTML = 'Created (newest -> oldest)';
  const oldCreatedOpt = document.createElement('option');
  oldCreatedOpt.setAttribute('value', '4');
  oldCreatedOpt.innerHTML = 'Created (oldest -> newest)';

  select.appendChild(chooseOpt);
  select.appendChild(highPriorityOpt);
  select.appendChild(lowPriorityOpt);
  select.appendChild(earlyDueDateOpt);
  select.appendChild(lateDueDateOpt);
  select.appendChild(newCreatedOpt);
  select.appendChild(oldCreatedOpt);

  dropdown.appendChild(select);
  // Add elements to structure
  toolbarDiv.appendChild(addButton);
  toolbarDiv.appendChild(orderDiv);
  toolbarDiv.appendChild(dropdown);
  // Return completed toolbar
  return toolbarDiv;
};

export default buildToolBar;