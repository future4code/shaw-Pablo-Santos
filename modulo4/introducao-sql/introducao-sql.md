A
Crate Table, serve pra criar um tabela no banco de dados
VARCHAR é uma propriedade que aceita em media 255 caracteres
NOT NULL  significa que o campo tem que ser preechido com os dados
FLOAT propriedade que aceita numetos nao inteiros
DATE propriedade  para alorcarmos as datas

B 
nao tive resultados pois o banco de dados ainda nao esta popularizado

C
mosytra toda a estrutuda da tabela criada , se é um VARCHAR, NULL TIPO DE KEY  ...


2
b. Código de erro: 1062. Entrada duplicada '002' para 'PRIMARY' chave
c.Código de erro: 1136. Contagem de colunas não corresponde à contagem de valor na linha 1
d.Código de erro: 1364. O 'nome' de campo não tem um valor padrão
e.Código de erro: 1292. Valor da data incorreta: '1950' para coluna 'birth_date' na linha 1
f.criado

3.
a. SELECT * FROM Actor WHERE gender = "female";
b.SELECT name, salary FROM Actor WHERE name ="Tony Ramos";
c. 0 linahs retornadas , pois rodos os genders estao sendo informados corretamente.
d.SELECT id, name, salary FROM Actor WHERE salary < 500000;
e.Código de erro: 1054. Coluna desconhecida 'nome' em 'lista de campo';

### 4.
a.SELECT name, salary FROM Actor WHERE name LIKE "A%" OR name LIKE "J%";
b.SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000
c.SELECT * from Actor WHERE (name LIKE "%G%" OR name LIKE "%g%");
d.WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") 
AND salary BETWEEN 350000 AND 900000 ;

### Exercício 5
a)O TEXT  é a família de tipo de coluna destinada ao armazenamento de caracteres de 
alta capacidade.

CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT,
    release_of_date DATE NOT NULL,
    evaluation FLOAT NOT NULL
);

b)
INSERT INTO Movie (id, name, synopsis, release_of_date, evaluation)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

c)
INSERT INTO Movie (id, name, synopsis, release_of_date, evaluation)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

d)
INSERT INTO Movie (id, name, synopsis, release_of_date, evaluation)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
que só quer saber de farras e jogatina nas boates. A vida de abusos 
acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

e)
INSERT INTO Movie (id, name, synopsis, release_of_date, evaluation)
VALUES(
"004",
"Dois Filhos de Franscisco",
"Francisco é um lavrador do interior de Goiás que sonha transformar seus dois filhos, 
Mirosmar e Emival, em uma famosa dupla sertaneja. Em meio a muitos percalços, 
um empresário consegue fazer deles um sucesso no interior do Brasil, 
até que um acidente interrompe a carreira da dupla. Anos mais tarde, Mirosmar 
transforma-se em Zezé Di Camargo, mas a fama só chega quando ele se junta 
ao irmão Welson (Luciano), o parceiro perfeito para concretizar a profecia de seu pai.",
"2005-08-19",
8
);


### Exercício 6
a)
SELECT id, name, evaluation  from Movie WHERE id = "002";


b)
SELECT name  from Movie WHERE name = "Dois Filhos de Franscisco";


c)
SELECT id, name, synopsis  from Movie WHERE evaluation >= 7;

### Exercício 7
a)
SELECT * from Movie WHERE name LIKE "%vida%";


b)
SELECT * from Movie WHERE name LIKE "%sucesso%" OR synopsis LIKE "%sucesso%";


c)
SELECT * from Movie WHERE release_of_date < "2017-11-02";


d)A 
SELECT * from Movie WHERE (name LIKE "%vida%" OR synopsis LIKE "%vida%" AND evaluation > 7);

.........