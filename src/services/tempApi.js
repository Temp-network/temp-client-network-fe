export const getMonitor = () => {
  return fetch('https://protected-forest-33315.herokuapp.com/')
    .then(res => {
      if(!res.ok) throw 'Unable to get monitor';

      return res.json;
    });
};
