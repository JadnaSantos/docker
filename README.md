# Docker
Repositório dedicado para os meus estudos sobre docker 🐳

### O que é o docker?

O Docker é uma plataforma para o desenvolvedor e/ou administrador de sistemas: criar, executar e compartilhar aplicativos em containers.
O uso de containers para implantar aplicativos é chamado de conteinerização.


O docker foi feito para rodar no Linux. Logo, o melhor comportamento você encontrará rodando no Linux, apesar de poder instalar e usar tanto em Windows quanto em macOS.

O container é:

- [x] Flexível: Até as aplicações mais complexas podem ser containers.
- [x] Leve: os containers aproveitam e compartilham o kernel do host, tornando-os muito mais eficientes em termos de recursos do sistema do que as máquinas virtuais.
- [x] Portátil: você pode criar localmente, implantar na nuvem e executar em qualquer lugar.
- [x] Acoplamento fraco: os containers são altamente auto-suficientes e encapsulados, permitindo substituir ou atualizar um sem atrapalhar outros.
- [x] Escalável: você pode aumentar e distribuir automaticamente réplicas de containers.
- [x] Seguro: os containers aplicam restrições e isolamentos agressivos aos processos sem nenhuma configuração necessária da parte do usuário.


<p aling="center">
  <img alt="Fluxograma Docker" title="Fluxograma Docker" src="./.github/fluxograma-docker.png" width="700px">
</p>

### Principais Comandos 

```
docker run ---------------------- instância e inicializa um container 
docker create ---------------------- cria mas não starta, eles tem um ciclo de vida
docker ps  ------------------ lista container que estão rodando e os que estão parados
docker stop ------------- serve para parar um container 
docker kill ---------------- kill é brupto 
docker rm ----------------- remover o container de uma vez
```
### Dockerfile
O DockerFile é uma maneira de criar imagens para execução de containers Docker, com instruções personalizadas e que podem ser modificadas posteriormente, conforme a necessidade.

O arquivo DockerFile é uma estrutura contendo instruções executadas em top-down, que ao final da execução, deixam o container pronto para uso.

### Como inicializar um dockerfile

```
FROM  Para criar uma imagem precisamos definir uma imagem já existente 

WORKDIR Diretório de trabalho dentro do container

COPY copia o arquivo package.json

RUN npm install

COPY copia o restante dos arquivos

EXPOSE coloca para executar numa porta

CMD ['npm', 'start'] comando de inicialização
```

### Docker Compose 
O Compose é uma ferramenta para definir e executar aplicativos Docker de vários contêineres. 
Com o Compose, você usa um arquivo YAML para configurar os serviços do seu aplicativo. 
Então, com um único comando, você cria e inicia todos os serviços de sua configuração.

### Como inicializar um docker.compose.yalm - exemplo

```
version: "declara a versão do docker compose"

services: "declara os serviços que serão rodados, nesse caso, chamamos de backend"
  backend:
    build: "declara o nome da imagem"
    ports:
      - 3333:3333
    container_name: api
    
    volumes: "declarar o volumes, com ele é possovel compartilharmos um volume da nossa máquina com o container.

```


## Fontes 🔎

https://docs.docker.com/
