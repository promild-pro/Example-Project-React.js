const TOKEN = 'Token example'

export const setUserToken = () => {
  localStorage.setItem(TOKEN, 'token diberikan dalam 1 jam dan silahkan login kembali' )
  const timeout = new Date();
  timeout.setMinutes(timeout.getMinutes() + 60);
  localStorage.setItem(`${TOKEN}-timeout`, timeout.toISOString());

}

export const getUserToken = () => {
  const data = localStorage.getItem(TOKEN)
  if (data) {
    const date = new Date();
    const timeout = new Date(localStorage.getItem(`${TOKEN}-timeout`));

    if (timeout && date.getTime() > timeout.getTime()) {
      localStorage.removeItem(TOKEN);
      localStorage.removeItem(`${TOKEN}-timeout`);
      return null;
    }

    return data;
  }

  return null;
}

export const removeToken = () => {
  const data = localStorage.getItem(TOKEN)
  if(data) {
    localStorage.removeItem(TOKEN) 
    localStorage.removeItem(`${TOKEN}-timeout`)
    return null
  }
}