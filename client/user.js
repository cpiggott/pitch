import uniqId from 'uniq-id';

let { localStorage } = window;

//https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}

export function getThisUser() {
  if (!storageAvailable('localStorage')) throw new Error("No local storage");
  let userFromStorage = localStorage.getItem('user');
  
  if (!userFromStorage) return newUser();
  
  let user;
  
  try {
    user = JSON.parse(userFromStorage);
  }
  catch(e) {
    console.log(e);
    console.log("Wiping user.");
    localStorage.removeItem('user');
    user = newUser();
  }
  
  return user;
}

function newUser() {
  return {
    id: uniqId()
  };
}