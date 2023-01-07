require('../../config/html.js');
let bd = require('../../config/database.js');
const LivroDAO = require('../ifra/LivroDAO.js');


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.redirect('/livros');
    });

    app.get('/magazine', (req, resp) => {
        resp.marko(
            require('../view/livros/lista/lista.marko'),
            {
                livros: [
                    {
                        id: '1',
                        titulo: 'PHP'
                    }
                ]
            }
        );
    });

    app.get('/magazines', (req, resp) => {
        let livroDao = new LivroDAO(bd);

        livroDao.all((error, books) => {
            resp.marko(
                require('../view/livros/lista/lista.marko'),
                {
                    livros: books
                }
            );
        });
    });

    app.get('/livros', (req, resp) => {
        let livroDao = new LivroDAO(bd);

        livroDao.lista()
            .then((books) => {
                resp.marko(
                    require('../view/livros/lista/lista.marko'),
                    { livros: books }
                );
            })
            .catch((err) => {
                throw new Error('Error', err)
            });
    });

    app.get('/livros/form', (req, resp) => {
        resp.marko(
            require('../view/form/form.marko')
        );
    });

    app.post('/livros', (req, resp) => {
        let livroDao = new LivroDAO(bd);

        livroDao.store(req.body)
            .then((success) => {
                resp.redirect('/livros');
            }).catch((err) => {
                console.log(err);
            });
    });

    app.delete('/livros/:id', (req, res) => {
        const { id } = req.params;
        let livro = new LivroDAO(bd);

        livro.delete(id)
            .then((success) => {
                res.redirect('http://localhost:3000/livros');
            }).catch((error) => {
                console.log(`Error:${error}`);
            });
    });

    app.get('/livros/form/:id', (req, res) => {
        const { id } = req.params;

        let livro = new LivroDAO(bd);

        livro.find(id)
            .then((book) => {
                console.log(book);
                res.marko(
                    require('../view/form/formEdit.marko'), { livro: book }
                );
            }).catch((error) => {
                console.log(`Error: ${error}`);
            });
    });

    app.put('/livros/edit', (req, resp) => {
        let livro = new LivroDAO(bd);

        livro.edit(req.body)
        .then( () => {
            resp.redirect('/livros');
        }).catch((error) => {
            console.log(`Error: ${error}`);
        });
    });
}