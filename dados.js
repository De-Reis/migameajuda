const list = [
    {
        id: 1,
        nome: 'Cristina',
        assunto: 'Como subir projeto no GitHub?',
        abertura: '08/07/2022',
        contato: 'cristina@migameajuda.com.br',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQs-PmUg69Dyr4J_bEcRjeGNvCZ5NRRTzz6Q&usqp=CAU'
    },
    {
        id: 2,
        nome: 'Amanda',
        assunto: 'Como criar componentes no react?',
        abertura: '23/07/2022',
        contato: 'amanda@migameajuda.com.br',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLS8-R7IL7YVFFN44i2W5jX1fJacSQxxK8iTPA-L8qqLQTbuay3LgliKJUfPCzdyiqWR0&usqp=CAU'
    },
    {
        id: 3,
        nome: 'Daiane',
        assunto: 'Como consumir API',
        abertura: '06/07/2022',
        contato: 'daiane@migameajuda.com.br',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKNy38wfvGKqs5oRzuMwpgywiTlF4FmHZ2JRDG2JUWXl3l7wHP_zcQ8adJLDvEMBsiCg&usqp=CAU'
    },
    {
        id: 4,
        nome: 'Rafaela',
        assunto: 'Como incluir música no meu site',
        abertura: '20/07/2022',
        contato: 'rafaela@migameajuda.com.br',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8Luglga9J2R3Bxt_PsWZISUHQWODD6_ZTAJ5mIQgxYCAE-YbkY81faTqp-hSA_jVPTs&usqp=CAU'
    },
    {
        id: 5,
        nome: 'Fernanda',
        assunto: 'Erro ao subir projeto no netlify',
        abertura: '14/07/2022',
        contato: 'fernanda@migameajuda.com.br',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LYqc7eitSWoZqdM09Kss-AwT00M7DOJ2CQ&usqp=CAU'
    },
    {
        id: 6,
        nome: 'Beatriz',
        assunto: 'Imagem não aparece na tela',
        abertura: '13/07/2022',
        contato: 'beatriz@migameajuda.com.br',
        imagem: 'data:image/png;base64,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'

    }
]


export default list