class ContactController {
  index(request, response) {
    response.send('Rota Index');
  }

  show(request, response) {
    response.send('Rota show');
  }

  store(request, response) {
    response.send('Rota store');
  }

  update(request, response) {
    response.send('Rota update');
  }

  delete(request, response) {
    response.send('Rota delete');
  }
}

//Singleton
module.exports = new ContactController();
