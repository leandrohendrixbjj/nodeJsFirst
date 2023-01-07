class LivroDAO {

    constructor(db) {
        this._db = db;
        this._query = "SELECT * FROM livros";
    }

    all(callback) {
        this._db.all(
            this._query, (error, books) => {
                callback(error, books)
            }
        )
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(this._query, (error, books) => {
                if (error) return reject('Erro na lista de livros');

                return resolve(books);
            });
        });
    }

    store(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(
                `INSERT INTO livros(
               titulo,
               preco,
               descricao
            )VALUES(?,?,?)`,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                (error) => {
                    if (error)
                        reject(`Não foi possível add o livro: ${livro.titulo}`);
                    resolve();
                }
            );
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this._db.run(`DELETE FROM livros WHERE id in (?)`,
                [id],
                (error) => {
                    if (error)
                        reject(`Error on method delete`)
                    resolve();
                }
            );
        });
    }

    find(id) {
        return new Promise((resolve, reject) => {
            this._db.all(`SELECT * FROM livros WHERE id in (${id})`, (error, books) => {
                if (error) reject('Erro na lista de livros');

                resolve(books[0]);
            });
        });
    }

    edit(livro) {
        return new Promise((resolve, reject) => {
            this._db.run('UPDATE livros SET titulo=?,preco=?,descricao=? WHERE id in (?)',
            [
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ],
            (error) => {
                if (error){ reject('Error on method Edit');}
                resolve();
            });
        });
    }
}

module.exports = LivroDAO;