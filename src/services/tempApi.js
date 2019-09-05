export const getMonitors = () => {
  return fetch('https://protected-forest-33315.herokuapp.com/api/v1/monitors')
    .then(res => {
      if(!res.ok) throw 'Unable to get monitor';

      return res.json;
    });
};
