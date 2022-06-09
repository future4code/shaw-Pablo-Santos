1
A. È um comando para referenciar uma tabela a outra tabela
B.CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);
C. Houve uma restrição na chave estrangeira
D.ALTER TABLE Movies DROP score;

2.
A.Uma tabela de elendo de filmes,
onde indica qual ator vai pra qual filme;

B.

C.Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shaw-21815158-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

D.Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

3
A. ON É O OPERADOR RESPONSÁVEL DE LIGAR UMA QUERY A OUTRA.
B.SELECT Movies.name, Movies.id, rate FROM Movies INNER JOIN Rating ON Movies.id = Rating.movie_id;
