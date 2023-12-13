const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Clinica01');

    const PacienteScrema = new mongoose.Schema({
        nome: String,
        telefone: String,
        ano_nascimento: Number,
        endereco: String,
        estado_civil: String
        
    }); const Paciente = mongoose.model('Paciente', PacienteScrema);

    const carlos = new Paciente({
        nome: 'Carlos',
        telefone: '123456789',
        ano_nascimento: 2000,
        endereco: 'Rua das lendas',
        estado_civil: 'Solteiro'
    })
    console.log(carlos);

    await carlos.save();

    const pacientes = await (mongoose.model('Paciente', PacienteScrema)).find();
    console.log(pacientes);
}