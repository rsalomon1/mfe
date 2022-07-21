// import('./bootstrap');

loadScript('http://localhost:8081/remoteEntry.js').then(() => {
  import('./bootstrap')
})