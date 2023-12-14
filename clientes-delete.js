const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/clinina");

  const PacienteScrema = new mongoose.Schema({
    nome: String,
    telefone: String,
    ano_nascimento: Number,
    endereco: String,
    estado_civil: String,
  });
  const Paciente = mongoose.model("Paciente", PacienteScrema);

  await Paciente.deleteOne({ nome: "Levi" });

  const pacientes = await mongoose.model("Paciente", PacienteScrema).find();
  console.log(pacientes);
}
