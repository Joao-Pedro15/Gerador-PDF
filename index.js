const pdf = require('html-pdf')

const frontend = `
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
body{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 100px 0 100px;
    align-items:  center;
}

h1{
    font-size: 20px;
    margin-bottom: 20px;
}

div{
    margin-bottom: 20px;
    text-align: justify
}

.title p{
    font-weight: 600;
    color: black;
}

h2{
    font-size: 14px;
    margin-bottom: 10px;
}

p{
    font-size: 14px;
    margin-bottom: 7px;
    color: rgba(0,0,0,.8);
}

.last div{
    margin-bottom: 10px;
    border-bottom: 3px solid rgba(0,0,0,.1);
    width: 500px;
}

.last p{
    color: rgba(0,0,0,.8);
}

a{
    text-decoration: none;
}

</style>
<body>
<div class="title">
    <h1>João Pedro Correa Monteiro</h1>
    <p>Portifólio: <a href="joaopedro15.000webhostapp.com">joaopedro15.000webhostapp.com</a></p>
    <p>Linkedin: <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-monteiro-2083a6203/">Joao Pedro</a></p>
    <p>GitHub: <a href="https://github.com/joao-pedro15">Joao-Pedro15</a></p>
    <p>Email: <a href="mailto:jjoao.monteiro15@gmail.com">jjoao.monteiro15@gmail.com</a></p>
<hr>
</div>

<div>
    <h2>Objetivo profissional:</h2>
    <p>Estou em busca de uma vaga como Desenvolvedor web frontend junior. Atualmente trabalho com ReactJs, Javascript, html5, Css3, Bootstrap e banco de dados (MongoDB e firebase), tenho conhecimentos em nodejs e estou disposto a aprender com desenvolvedores mais experientes para me tornar um programador melhor a cada dia!.</p>
</div>

<div>
    <h2>Habilidades:</h2>
    <p>Desenvolvimento de interface no framework ReactJs</p>
    <p>Criação de Componentes usando ReactJS</p>
    <p>Desenvolvimento com React Hooks como useEffect e UseState</p>
    <p>Gerenciamento de estado com Redux</p>
    <p>Gerenciamento de Rotas com React Router</p>
    <p>Linguagens básicas do desenvolvimento web: HTML5, CSS3, Javascript</p>
    <p>Utilização das bibliotecas bootstrap e jquery</p>
    <p>Template engine EJS e Handlebars para paginas dinamicas</p>
    <p>Utilização de tecnologias de versionamento como Git e Github</p>
</div>

<div>
<h2>Diferenciais:</h2>
<p>Conhecimentos backend com Nodejs</p>
<p>Desenvolvimento de servidor com Express</p>
<p>Operações com banco de dados MongoDB (mongoose) e Firebase</p>
</div>

<div>
    <h2>Escolaridade:</h2>
    <p>Ensino Técnico completo - Informática</p>
    <p>ETEC Camargo Aranha - São Paulo, SP</p>
    <p>Janeiro de 2018 a Novembro de 2020</p>
</div>

<div class="last">
    <h2>Certificados:</h2>
    
    <div>
    <p>Desenvolvimento Web Full Stack - NodeJs e MongoDB</p>
    <p>Novembro 2021</p>
    <p>Número do Certificado: DVWBJPCM26NO412114</p>
    <p>Consultar validade em: programadorbr.com/autenticidade</p>
    </div>

    <div>
    <p>Desenvolvimento Web Full Stack - Firebase, jQuery e Bootstrap</p>
    <p>Julho de 2021</p>
    <p>Número do Certificado: DVWBJPCM26FI412114</p> 
    <p>Consultar validade em: programadorbr.com/autenticidade</p>
    </div>

    <div>
    <p>Desenvolvimento Web Full Stack - HTML, CSS E Javascript</p>
    <p>Março de 2021</p>
    <p>Número do Certificado: DVWBJPCM26HT412114</p> 
    <p>Consultar validade em: programadorbr.com/autenticidade</p>
    </div>
</body>
`
const backend = `
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
body{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 100px 0 100px;
    align-items:  center;
}

h1{
    font-size: 20px;
    margin-bottom: 20px;
}

div{
    margin-bottom: 20px;
    text-align: justify
}

.title p{
    font-weight: 600;
    color: black;
}

h2{
    font-size: 14px;
    margin-bottom: 10px;
}

h3 {
    font-size: 12px;
    margin-bottom: 10px;
}

p{
    font-size: 14px;
    margin-bottom: 7px;
    color: rgba(0,0,0,.8);
}

.last div{
    margin-bottom: 10px;
    border-bottom: 3px solid rgba(0,0,0,.1);
    width: 500px;
}

.last p{
    color: rgba(0,0,0,.8);
}

a{
    text-decoration: none;
}

</style>
<body>
<div class="title">
    <h1>João Pedro Correa Monteiro</h1>
    <p>Portifólio: <a href="https://joao-pedro15.github.io/Portifolio">https://joao-pedro15.github.io/Portifolio/</a></p>
    <p>Linkedin: <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-monteiro-2083a6203/">Joao Pedro</a></p>
    <p>GitHub: <a href="https://github.com/joao-pedro15">Joao-Pedro15</a></p>
    <p>Email: <a href="mailto:jjoao.monteiro15@gmail.com">jjoao.monteiro15@gmail.com</a></p>
<hr>
</div>

<div>
        <h2>Experiência profissional:</h2>
        <h3>Desenvolvedor Back-end JR - Vereda Educação</h3>
        <p>Responsável por criar e dar manutenção a um sistema ERP.
            Responsável por implementação <br> de testes automatizados (unitários, integração e E2E) com framework Jest, além de implementação <br> de design pattern factory e princípios do SOLID.
        </p>
    </div>
    
    <div>
        <h2>Habilidades:</h2>
        <p>Linguagem de programação NodeJs</p>
        <p>Desenvolvimento de servidor com framework ExpressJs</p>
        <p>Desenvolvimento de API com typescript</p>
        <p>Design patterns como Factory e Adapter<p>
        <p>Implementação de testes automatizados dom Jest</p>
        <p>Operações com banco de dados SQL (SqlServer)</p>
        <p>Operações com banco de dados MongoDB (mongoose) e Firebase</p>
        <p>Experiência com ORMs (prismajs e sequelize)<p>
        <p>Familiaridade com plataforma Microsoft Azure</p>
        <p>Autenticação e sessões com JWT (jsonwebtoken) e Passport</p>
        <p>Utilização de tecnologias de versionamento como Git e Github</p>
    </div>
    
    <div>
        <h2>Escolaridade:</h2>
        <p>Ensino Técnico completo - Informática</p>
        <p>ETEC Camargo Aranha - São Paulo, SP</p>
        <p>Janeiro de 2018 a Novembro de 2020</p>
    </div>
</body>
`
const fullstack = `
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
body{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 100px 0 100px;
    align-items:  center;
}

h1{
    font-size: 20px;
    margin-bottom: 20px;
}

div{
    margin-bottom: 20px;
    text-align: justify
}

.title p{
    font-weight: 600;
    color: black;
}

h2{
    font-size: 14px;
    margin-bottom: 10px;
}

p{
    font-size: 14px;
    margin-bottom: 7px;
    color: rgba(0,0,0,.8);
}

.last div{
    margin-bottom: 10px;
    border-bottom: 3px solid rgba(0,0,0,.1);
    width: 500px;
}

.last p{
    color: rgba(0,0,0,.8);
}

a{
    text-decoration: none;
}

</style>
<body>
<div class="title">
    <h1>João Pedro Correa Monteiro</h1>
    <p>Portifólio: <a href="joaopedro15.000webhostapp.com">joaopedro15.000webhostapp.com</a></p>
    <p>Linkedin: <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-monteiro-2083a6203/">Joao Pedro</a></p>
    <p>GitHub: <a href="https://github.com/joao-pedro15">Joao-Pedro15</a></p>
    <p>Email: <a href="mailto:jjoao.monteiro15@gmail.com">jjoao.monteiro15@gmail.com</a></p>
<hr>
</div>

<div>
    <h2>Objetivo profissional:</h2>
    <p>Estou em busca de uma vaga como Desenvolvedor web fullstack junior. Atualmente trabalho com NodeJs, ExpressJs, ReactJs, Javascript, html5, Css3, Bootstrap e banco de dados MongoDB e firebase. Estou disposto a aprender com meus colegas de trabalho para me tornar um programador melhor a cada dia!.
    </p>
</div>

<div>
    <h2>Habilidades:</h2>
    <p>Linguagem de programação backend NodeJs</p>
    <p>Desenvolvimento e consumo de APIs</p>
    <p>Desenvolvimento de servidor com framework ExpressJs</p>
    <p>Desenvolvimento de interface no framework ReactJs</p>
    <p>Desenvolvimento com React Hooks como useEffect e UseState</p>
    <p>Operações com banco de dados MongoDB (mongoose) e Firebase</p>
    <p>Gerenciamento de estado com Redux</p>
    <p>Gerenciamento de Rotas com React Router</p>
    <p>Linguagens básicas do desenvolvimento web: HTML5, CSS3, Javascript</p>
    <p>Utilização das bibliotecas bootstrap e jquery</p>
    <p>Template engine EJS e Handlebars para paginas dinamicas</p>
    <p>Autenticação e sessões com JWT (jsonwebtoken) e Passport</p>
    <p>Utilização de tecnologias de versionamento Git e GitHub</p>
</div>


<div>
    <h2>Escolaridade:</h2>
    <p>Ensino Técnico completo - Informática</p>
    <p>ETEC Camargo Aranha - São Paulo, SP</p>
    <p>Janeiro de 2018 a Novembro de 2020</p>
</div>

<div class="last">
    <h2>Certificados:</h2>
    
    <div>
    <p>Desenvolvimento Web Full Stack - NodeJs e MongoDB</p>
    <p>Novembro 2021</p>
    <p>Número do Certificado: DVWBJPCM26NO412114</p>
    <p>Consultar validade em: programadorbr.com/autenticidade</p>
    </div>

    <div>
    <p>Desenvolvimento Web Full Stack - Firebase, jQuery e Bootstrap</p>
    <p>Julho de 2021</p>
    <p>Número do Certificado: DVWBJPCM26FI412114</p> 
    <p>Consultar validade em: programadorbr.com/autenticidade</p>
    </div>

    <div>
    <p>Desenvolvimento Web Full Stack - HTML, CSS E Javascript</p>
    <p>Março de 2021</p>
    <p>Número do Certificado: DVWBJPCM26HT412114</p> 
    <p>Consultar validade em: programadorbr.com/autenticidade</p>
    </div>
</body>
`


pdf.create(backend, {}).toFile('./back/curriculo.pdf', (err, res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})