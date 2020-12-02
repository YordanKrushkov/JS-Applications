
  import {Router} from 'https://unpkg.com/@vaadin/router';

  let rootElement=document.getElementById('root');
  let router= new Router(rootElement);

  router.setRouts([
      {
          path: "/",
          components: 'home-component',
      },
      {
          path: "/register",
          components: "register-component"
      },
  ])