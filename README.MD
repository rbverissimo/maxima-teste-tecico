Instruções para fazer o deploy:
    Uma vez instalado o motor Docker, via Docker Desktop ou Docker, rodar os seguintes comandos:

    1. Criar um instância no MySQL de nome mysqldb configurando o 'root' com o password: 123456
        docker pull mysql
        docker network create springboot-mysql-net
        docker run --name mysqldb --network springboot-mysql-net -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=logistica_api

    2. Executar a API Java Spring
        docker pull rbverissimo/logistica-api-maximatech
        docker run -d -p  4200:8080 rbverissimo/logistica-api-maximatech
    
    3. Executar o Client Angular
        docker pull rbverissimo/logistica-web-maximatech
        docker run -d -p 8080:80 rbverissimo/logistica-web-maximatech