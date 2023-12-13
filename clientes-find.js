const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Clinica01");

  const PacienteScrema = new mongoose.Schema({
    nome: String,
    telefone: String,
    ano_nascimento: Number,
    endereco: String,
  });
  const Paciente = mongoose.model("Paciente", PacienteScrema);

  await Paciente.find()

  const pacientes = await mongoose.model("Paciente", PacienteScrema).find();
  console.log(pacientes);
}
