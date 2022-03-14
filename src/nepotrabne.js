  //console.log(Date.now());
  console.log(sunn(Date.now()));
  setTime(sunn(Date.now()))
  
  // toto nam vráti akí je dnes deň
  const dateNow = new Date();
  const options = { weekday: 'long'};
  //setDay(new Intl.DateTimeFormat('en-US', options).format(dateNow));

  const options2 = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
  setDay(dateNow.toLocaleDateString('en-US', options2));

  console.log(new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(dateNow))


  const sec = 1647165600;
  const date = new Date(sec * 1000);
  
  const timestr = date.toLocaleTimeString();

  console.log(date, timestr);