1
A. Altera a tabela Actor e exclui a cluna salario.
B.Altera a tabela Actor trocando "genero" por "sex" indicando que ira receber uma string de  de max 6 caracteres.
C.ALtera a tabela trocando genenero para gender e que receba  255 caracteres.
D. ALTER TABLE Actor CHANGE gender gender VARCHAR(100) 

2
A.UPDATE Actor
SET birth_date = "1991-15-26"
WHERE id = 003; // altera a data de aniversario
B.UPDATE Actor SET name ="JULIANA PAES" WHERE name ="Juliana Paes";
C.UPDATE Actor SET name = "Eduardo Costa",
birth_date = "1980-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

3
A.DELETE FROM Actor WHERE name = "Fernanda Montenegro";
B.DELETE FROM Actor WHERE gender ="male" AND salary > 1000000;

4.
A.SELECT MAX(salary) FROM Actor;
B.SELECT MIN(salary) FROM Actor WHERE gender ="female";
C.SELECT COUNT(*) FROM Actor WHERE gender="female";
D.SELECT SUM(salary) from Actor;

5
A.Ela separa por grupo de generos e soma q ausntidade de cada um 
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender

B.SELECT id, name FROM Actor ORDER BY name DESC;

C.SELECT * FROM Actor ORDER BY salary;

D.SELECT * FROM Actor ORDER BY salary DESC limit 3;

E.SELECT AVG(salary), gender FROM Actor GROUP BY gender;

6
A. ALTER TABLE Movie ADD playing_limit_date DATE;

B.ALTER TABLE Movie CHANGE rating rating FLOAT;

C.UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"


D.DELETE FROM Movie WHERE id = "001"