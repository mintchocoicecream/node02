### nodejs & Express & mysql

#### mysql docer setting
'''
docker run -it -d -p 3306:3306 -e MYSQL_DATABASE=lecture -e MYSQL_ROOT_PASSWORD=mysql -e MYSQL_USER=scott -e MYSQL_PASSWORD=tiger --name mysql8 -v dummysql:/var/lib/mysql mysql

> docker exec -it mysql8 /bin/bash
> mysql -u root -pmysql
GRANT ALL privileges ON *.* TO 'scott'@'%' IDENTIFIED with mysql_native_password BY 'tiger';
flush privileges;

'''