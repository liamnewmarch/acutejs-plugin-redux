export default ({ store }) => {
  return (acute) => {
    store.subscribe(() => {
      acute.render();
    });
  };
};
