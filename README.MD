# Pawtastic form

Esse formulário segue a mesma estrutura que esse formulário [aqui](https://github.com/Nadno/Pawtastic), dessa vez utilizando React, aproveitando componentes, _estados_, _context_, e _error boundaries_. Abaixo segue com algumas imagens do formulário, caso queira pode pular direto para a funcionalidade (aqui)[#funcionalidade].

### Mobile

<p align="center"><img src="https://i.pinimg.com/564x/c9/46/02/c94602268016699abd2a12c9223d124d.jpg" alt="mobile print" /></p>

### Ipad

<p align="center"><img src="https://i.pinimg.com/564x/4c/f0/6b/4cf06bdd2fd445c001f839906a02ae45.jpg" alt="ipad print" /></p>

### Desktop

<p align="center"><img src="https://i.pinimg.com/564x/52/7d/28/527d280960c268a1fb7b633c21959041.jpg" alt="desktop print" /></p>

<h2 id="funcionalidade">Funcionalidades</h2>

- ### Estado do formulário

  <p align="center"><img src="https://i.pinimg.com/564x/ae/5e/31/ae5e31021ce4755b4e9142e8fe6cbd9c.jpg" alt="code print - useForm" /></p>

  O estado do formulário foi separado em um _hook próprio_, e como mostrado acima, possui três estados, um com erros, outro com os valores, e outro para capturar o nome de valores alterados, que serão usados assim que setState guardar o valor do input (**ação executada no useEffect**), com a função _validadeValues_, que irá validar o valor recebido e armazenar o erro em _errors_ caso haja algum.

  O useForm possui duas funções para cuidar da entrada dos inputs:

  <p align="center"><img src="https://i.pinimg.com/564x/6a/dd/72/6add726416ea9b3239e05da9fadbdfb4.jpg" alt="code print - handleChange" /></p>
  A função handleChange cuida de inputs de texto e checkboxes.

  <p align="center"><img src="https://i.pinimg.com/564x/e1/cb/fc/e1cbfcdccff7e8176f8df260684a605f.jpg" alt="code print - handleFile" /></p>
  A função handleFile cuida de arquivos, no caso deste formulário uma imagem. E também impede o anexo de arquivos inválidos.

  #### Usando o useForm

  <p align="center"><img src="https://i.pinimg.com/564x/52/f1/38/52f1389bb07d58cbb8105646f8ae62c4.jpg" alt="code print - using useForm" /></p>

  O executamos da mesma maneira do useState, com a diferença que é um objeto e não um array sendo desestruturado. Após passarmos os valores iniciais, recebemos de _useForm_, além de _values_ e _errors_, o _handleSubmit_, _handleChange_ e _checkInputs_ (que verifica todos inputs da faze atual).

  <p align="center"><img src="https://i.pinimg.com/564x/23/d1/a7/23d1a7be8c5d2f4381c49f510b4cad6b.jpg" alt="code print - using values and errors" /></p>

  Por fim, todos inputs recebem seus respectivos valores, e erros, caso possuam.

- ### Validação

  <p align="center"><img src="https://i.pinimg.com/564x/b2/85/85/b2858575f894de5124280b54c8a91baf.jpg" alt="code print - valid input" /></p>

  A função mais importante para a validação é a _validInput_ que recebe apenas o nome do input, e pega a função de validação correspondente a esse input, e caso não possua uma, recebe uma função padrão, que serve para maioria dos inputs. Então repassa para a função o valor e o nome do input recebido. Dessa maneira a função pode ser reaproveitada, sendo usada para validar um único input, ou vários como é o caso do formulário, que é dividido em fazes. E antes de passar para uma próxima faze, todos inputs da faze atual são validados novamente, e caso um input possua um valor inválido, o usuário é impedido de seguir adiante.

- ### Fazes do formulário

  Para dividir o formulário em fazes, utilizei do **context**, para prover um contexto geral, e evitar de passar props para os componentes que fazem uso da variável **step**. Criando um segundo hook _useStep_, qualquer componente pode fazer o uso do estado atual do formulário, tornando possível mostrar um progresso ao usuário no componente a esquerda (_quando em desktop_) e fazer a _renderização condicional_ de fieldsets diferentes. O _useStep_ também é utilizado por um terceiro componente, que faz a transição de imagens, que mudam conforme o formulário é avançado.
