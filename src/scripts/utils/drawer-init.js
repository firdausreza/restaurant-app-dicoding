const DrawerInit = {
  init({ button, drawer, content }) {
    let isActive = false;
    button.addEventListener('click', (event) => {
      if (isActive === false) {
        this._toggleDrawer(event, drawer);
        isActive = !isActive;
      } else {
        this._closeDrawer(event, drawer);
        isActive = !isActive;
      }
    });

    content.addEventListener('click', (event) => {
      if (isActive === true) {
        this._closeDrawer(event, drawer);
        isActive = !isActive;
      }
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.add('active');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('active')
  }
}

export default DrawerInit;