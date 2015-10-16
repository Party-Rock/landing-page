export class App {
  configureRouter(config, router){
    config.title = 'PartyRock';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: true, title:'PartyRock' },
      { route: 'subscribe',         name: 'subscribe',        moduleId: 'subscribe',        nav: true, title:'Subscription' },
    ]);

    this.router = router;
  }
}
