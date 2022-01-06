# codeedu_FC20_Docker_DesafioNginxComNodejs
[Revisão] Acrescentado 'dockerize' para aguardar ativação do DB MYSQL

# Desafio nginx com nodejs

.Para ativar a solução
docker-compose up -d --build

.Para efetuar a consulta:
http://localhost:8080/users (com Nginx)
OU
http://localhost:3000/users (direto no Nodejs)

OBS: A cada consulta executada acrescenta o nome "Edson"

.Conteiners:
CONTAINER ID   IMAGE        COMMAND                  CREATED          STATUS          PORTS                    NAMES
79d0266b9bd6   docker_lb    "nginx -g 'daemon of…"   10 minutes ago   Up 10 minutes   0.0.0.0:8080->80/tcp     lb
1b6eceba06dc   docker_app   "npm start"              10 minutes ago   Up 10 minutes   0.0.0.0:3000->3000/tcp   app
983656b9001d   mysql:5.7    "docker-entrypoint.s…"   10 minutes ago   Up 10 minutes   3306/tcp, 33060/tcp      db

. Resultado
Desafio: Nginx com Nodejs

#	Name
1	Edson
2	Edson
3	Edson
