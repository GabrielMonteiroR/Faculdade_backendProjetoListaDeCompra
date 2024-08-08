# Minha Lista de Compras - Tropa do Japa

## Documentação front-end

### Proposta dos stakeholders

> _Propomos o desenvolvimento de um aplicativo de lista de compras chamado "Minha Lista de Compras", que incluirá funcionalidades de adicionar, editar, remover e marcar itens como comprados. O desenvolvimento será realizado utilizando metodologia ágil._

#### Solicitações prévias dos stakeholders
##### Ideia do Software:
* Um aplicativo de lista de compras chamado "Minha Lista de Compras".
##### Requisitos:
1. Adicionar Itens:
O usuário deve poder adicionar itens à lista de compras com nome e quantidade.

2. Editar Itens:
O usuário deve poder editar os itens na lista (nome e quantidade).

3. Remover Itens:
O usuário deve poder remover itens da lista.

4. Marcar Itens como Comprados:
O usuário deve poder marcar itens como comprados.

5. Interface Simples:
A interface deve ser fácil de usar e intuitiva.

_A partir dessas informações e solicitações, iniciamos as discussões acerca do que deveríamos desenvolver e de qual maneira poderíamos tornar esse software usual, estilizado, rápido e intuitivo.
Para isso, partimos para a divisão dos trabalhos para que a produção pudesse ocorrer. No front-end iniciamos com a prototipação da tela para termos uma ideia de como iríamos distribuir as funções solicitadas pelos stakeholders para que tornasse o uso simples e eficaz, aproveitando para criar uma ideia de estilização do projeto._

### Prototipação
Fomos em busca de suprir tudo aquilo que nos foi solicitado e para isso listamos tudo que precisaríamos no software.
##### Listagem de necessidades do software
* Tela inicial.
* Título de descrição do software.
* Local para recebimento dos dados (Nome do item e quantidade).
* Botão para adicionar itens à lista.
* Listagem distintas para atividades pendentes e atividades concluídas.
* Botão para editar atividade.
* Botão para excluir atividade.
* Botão para marcar atividade como concluída.

![Tela de prototipação light mode](DocImages/16.jpeg.png)
###### Tela de prototipação light mode
![Tela de prototipação light mode](DocImages/17.jpeg.png)
###### Tela de prototipação dark mode

Após analisar cada uma das funcionalidades e discutirmos com a equipe de desenvolvimento, viu-se a necessidade de algumas alterações e adições que seriam essenciais para o funcionamento fluído, intuitivo e confortável do software, tornando a listagem de necessidades do software um pouco maior.

##### Novas adições
* *_Logo dos usuários na tela principal._*
* *_Necessidade de outro local para atualização dos dados a partir da função de edição._*
* *_Necessidade de outro botão para atualizar os itens ao invés de "adicioná-los"._*
* *_Adicionar botão de retomar a atividade concluída para pendente._*
* *_Necessidade de adicionar a data adição de itens à lista pendentes._*
* *_Necessidade de adicionar a data de compra dos itens à lista de concluído._*
* *_Necessidade de eliminar os botões de editar, excluir e marcar como concluído na listagem de concluídos._*
* *_Necessidade de utilizar o mesmo input para adição e edição dos itens*_
* *_Adição do botão para transição do light para dark mode._*
* *_Buscamos adaptar a tela para que não exista barra de rolagem na mesma, apenas dentro das lista de pendentes e concluídos. Tornando a imersão no software mais intuitiva e mais fluída quanto ao primeiro protótipo que a cada item adicionava uma barra de rolagem ainda maior na página._*
* *_Necessidade de diferenciar o nome dos itens em cada uma das listas, sendo o item riscado quando estiver concluído*_

Após cada uma dessas análises chegamos a prototipação final e iniciamos o processo de desenvolvimento da tela.

### Conclusão do desenvolvimento da tela e suas funcionalidades
###### Tela inicial em light mode, realizando o click no botão de transição entre os temas.
![Tela de início em light mode](DocImages/1.jpeg)

###### Tela inicial em dark mode.
![Tela de início em dark mode](DocImages/2.jpeg)

###### Utilizando o input de nome para adicionar nome ao item.
![Input de nome](DocImages/3.jpeg)

###### Utilizando o input de quantidade para adicionar quantidade ao item.
![Input de quantidade](DocImages/4.jpeg)

###### Utilizando o botão de adicionar para levar os dados digitados até a lista de pendentes.
![Botão de adicionar item](DocImages/5.jpeg)

###### Utilizando a opção de editar item, que leva os dados do item para o mesmo campo alterando o botão para "Atualizar item".
![Botão de editar item](DocImages/6.jpeg)

###### Atualizando a quantidade do item de 12 para 14.
![Atualizando a quantidade do item](DocImages/7.jpeg)

###### Demonstrando que o item foi atualizado para a quantidade descrita anteriormente (14).
![Quantidade atualizada](DocImages/8.jpeg)

###### Utilizando o botão de excluir item da lista.
![Utilizando o botão de excluir item](DocImages/9.jpeg)

###### Demonstrando que o item foi excluído da lista.
![Lista vazia após a exclusão do item](DocImages/10.jpeg)

###### Após adicionar novamente o item à lista, realizamos a conclusão do item no botão "marcando como comprado".
![Botão de concluir a atividade pendente](DocImages/11.jpeg)

###### Demonstrando que a atividade foi levada para a lista de concluído
![Item deslocado para a lista de concluído](DocImages/12.jpeg)

###### Utilizando o botão de retornar item para a lista de pendentes
![Botão de retorno do item para a lista de pendentes](DocImages/13.jpeg)

###### Demonstrando que o item retornou a lista de pendentes com a data de adição dele
![Item deslocado para a lista de pendentes](DocImages/14.jpeg)

###### Demonstrando o software com um item na lista de pendentes no light mode
![Software light mode com item na lista de pendentes](DocImages/15.jpeg)
